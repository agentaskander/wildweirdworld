import { access } from 'node:fs/promises'
import { resolve } from 'node:path'
import { pathToFileURL } from 'node:url'

const internalIndexPath = resolve('private/internal-site/index.html')
const handlesPath = resolve('private/internal-site/handles.html')

const printPath = async (label, path) => {
  await access(path)
  console.log(`${label}: ${path}`)
  console.log(`${label} URL: ${pathToFileURL(path).href}`)
}

try {
  console.log('WARNING: WWW-HQ internal pages are local-only and must not be deployed publicly.')
  await printPath('Internal index', internalIndexPath)
  await printPath('Handle archive', handlesPath)
} catch (error) {
  console.error(`Internal page missing: ${error.message}`)
  process.exitCode = 1
}
