import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve, sep } from 'node:path'

const HOST = '127.0.0.1'
const PORT = 3197
const root = resolve('private/internal-site')

const routes = new Map([
  ['/', 'index.html'],
  ['/handles', 'handles.html'],
  ['/governance', 'governance.html'],
  ['/launch-checklist', 'launch-checklist.html'],
])

const contentTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.svg', 'image/svg+xml; charset=utf-8'],
])

function resolveInternalFile(url) {
  const pathname = decodeURIComponent(new URL(url, `http://${HOST}:${PORT}`).pathname)
  const routed = routes.get(pathname)

  if (routed) {
    return resolve(root, routed)
  }

  const cleanPath = normalize(pathname).replace(/^(\.\.[/\\])+/, '')
  const requested = cleanPath === sep || cleanPath === '/'
    ? join(root, 'index.html')
    : join(root, cleanPath)
  const file = existsSync(requested) && statSync(requested).isDirectory()
    ? join(requested, 'index.html')
    : requested
  const resolved = resolve(file)

  if (!resolved.startsWith(`${root}${sep}`) && resolved !== root) {
    return null
  }

  return resolved
}

createServer((request, response) => {
  const file = resolveInternalFile(request.url ?? '/')

  if (!file || !existsSync(file) || !statSync(file).isFile()) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Internal WWW-HQ file not found.')
    return
  }

  response.writeHead(200, {
    'Content-Type': contentTypes.get(extname(file)) ?? 'application/octet-stream',
    'Cache-Control': 'no-store',
  })
  createReadStream(file).pipe(response)
}).listen(PORT, HOST, () => {
  console.log(`INTERNAL WWW-HQ running at http://${HOST}:${PORT}/`)
})
