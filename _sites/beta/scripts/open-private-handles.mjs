import { access } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const handlesPagePath = resolve('private/internal-site/handles.html')

try {
  await access(handlesPagePath)
  console.log(pathToFileURL(handlesPagePath).href)
} catch {
  console.error('Private handles page not found. Generate private/internal-site/handles.html first.')
  process.exitCode = 1
}
