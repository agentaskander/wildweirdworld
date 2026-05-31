import { createReadStream, existsSync, statSync } from 'node:fs'
import { createServer } from 'node:http'
import { extname, join, normalize, resolve, sep } from 'node:path'

const HOST = '127.0.0.1'
const PORT = 3196
const hasPrivateSite = existsSync(resolve('private/private-site'))
const root = hasPrivateSite
  ? resolve('private/private-site')
  : resolve('private/internal-site')
const fallbackFile = resolve('private/internal-site/private-preview.html')

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

function resolveLocalFile(url) {
  if (!hasPrivateSite || !existsSync(root)) {
    return fallbackFile
  }

  const pathname = decodeURIComponent(new URL(url, `http://${HOST}:${PORT}`).pathname)
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

  if (existsSync(resolved) && statSync(resolved).isFile()) {
    return resolved
  }

  return fallbackFile
}

createServer((request, response) => {
  const file = resolveLocalFile(request.url ?? '/')

  if (!file || !existsSync(file)) {
    response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Private WWW-HQ file not found.')
    return
  }

  response.writeHead(200, {
    'Content-Type': contentTypes.get(extname(file)) ?? 'application/octet-stream',
    'Cache-Control': 'no-store',
  })
  createReadStream(file).pipe(response)
}).listen(PORT, HOST, () => {
  console.log(`PRIVATE WWW-HQ running at http://${HOST}:${PORT}/`)
})
