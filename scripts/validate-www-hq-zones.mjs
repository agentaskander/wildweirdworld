import { existsSync, readFileSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import { join } from 'node:path'

const root = process.cwd()
const failures = []

function read(path) {
  return readFileSync(join(root, path), 'utf8')
}

function fail(message) {
  failures.push(message)
}

const packageJson = JSON.parse(read('package.json'))
const viteConfig = read('vite.config.js')
const portsDoc = existsSync(join(root, 'PORTS.md')) ? read('PORTS.md') : ''
const governanceDoc = existsSync(join(root, 'THREE_ZONE_GOVERNANCE.md')) ? read('THREE_ZONE_GOVERNANCE.md') : ''

for (const [name, script] of Object.entries(packageJson.scripts ?? {})) {
  if ((name === 'dev' || name === 'preview') && /\b3195\b/.test(script)) {
    fail(`public package script "${name}" must not use 3195`)
  }
  if ((name === 'dev' || name === 'preview') && /\b3198\b/.test(script)) {
    fail(`public package script "${name}" must not use 3198`)
  }
}

if (/port:\s*3195\b/.test(viteConfig)) {
  fail('public vite.config.js must not use 3195')
}
if (/port:\s*3198\b/.test(viteConfig)) {
  fail('public vite.config.js must not use 3198')
}

const trackedFiles = execFileSync('git', ['ls-files'], { encoding: 'utf8' })
if (/^(private\/|.*handles\.private|.*original-internal-3195)/m.test(trackedFiles)) {
  fail('private/original internal handle files must not be tracked')
}

const publicTargets = [
  'src',
  'public',
  'dist',
  'index.html',
  'README.md',
].filter((path) => existsSync(join(root, path)))

if (publicTargets.length) {
  let grep = ''
  try {
    grep = execFileSync('grep', [
      '-RInEi',
      'suggestedHandle|@WildWeirdWorld|instagram|tiktok|youtube|discord|twitter|x\\.com|threads|pinterest|etsy|redbubble|/handles',
      ...publicTargets,
      '--exclude-dir=node_modules',
    ], { encoding: 'utf8' }).trim()
  } catch (error) {
    if (error.status !== 1) {
      throw error
    }
  }

  if (grep) {
    fail(`public source/build contains handle or social exposure:\n${grep}`)
  }
}

const sitemapPath = join(root, 'public', 'sitemap.xml')
if (existsSync(sitemapPath) && /\/handles\b/i.test(readFileSync(sitemapPath, 'utf8'))) {
  fail('public sitemap contains /handles')
}

const docs = `${portsDoc}\n${governanceDoc}`
if (!/WWW-HQ internal site:\s*`?http:\/\/127\.0\.0\.1:3195\//.test(docs)) {
  fail('3195 must be documented as the original internal WWW-HQ site')
}
if (/Public WWW-HQ local app:\s*`?http:\/\/127\.0\.0\.1:3195\//.test(docs) || /Bookmarks\/control page:\s*`?http:\/\/127\.0\.0\.1:3195\//i.test(docs)) {
  fail('3195 is documented as public preview or bookmarks')
}
if (/public local(?: preview)?:\s*`?http:\/\/127\.0\.0\.1:319(?:5|8)\//i.test(docs) || /internal.*http:\/\/127\.0\.0\.1:3197\//i.test(docs)) {
  fail('docs contain an incorrect WWW-HQ port assignment')
}

const bookmarksPath = '/Users/askander/dev/codex/platform/app-bookmarks.html'
if (existsSync(bookmarksPath)) {
  const bookmarks = readFileSync(bookmarksPath, 'utf8')
  if (/WWW-HQ Private Handles|@WildWeirdWorld|suggestedHandle/i.test(bookmarks)) {
    fail('bookmarks page contains private handle content')
  }
}

const internalApp = join(root, 'private', 'original-internal-3195', 'src', 'App.jsx')
if (existsSync(internalApp)) {
  const internalSource = readFileSync(internalApp, 'utf8')
  for (const marker of ['handlePatterns', 'platformCards', 'suggestedHandle', 'HandlesPage']) {
    if (!internalSource.includes(marker)) fail(`internal original app missing ${marker}`)
  }
} else {
  fail('private/original-internal-3195/src/App.jsx is missing')
}

if (failures.length) {
  console.error(failures.join('\n\n'))
  process.exit(1)
}

console.log('WWW-HQ zone validation passed')
