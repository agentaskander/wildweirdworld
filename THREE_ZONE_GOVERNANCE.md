# WWW HQ Three-Zone Publishing Governance

WWW-HQ uses three separate zones so public publishing stays safe while private and internal planning remains available locally.

## 1. PUBLIC

The public zone is the SEO-safe website deployed to `wildweirdworld.com`.

Public content may include:

- Game pages
- World and character encyclopedia pages
- Entity graph pages
- Public-safe blog posts
- Public-safe founder and studio process pages

Public content must not include:

- Unsecured handles
- Private account plans
- Unpublished claims
- Admin notes
- Private child or family operational details
- Secrets, tokens, or keys
- Internal planning data

## 2. PRIVATE

The private zone is a local/private preview and demo area. It is not public, not routed by the React app, not included in the sitemap, and not deployed to the public Cloudflare Pages project.

Private files live under `private/` or `zones/private/` and are ignored by git.

## 3. INTERNAL

The internal zone is the full private ops, admin, and reference area. It must preserve operational notes, handle archives, claiming checklists, status notes, and planning references. It is never deployed publicly.

Internal files live under `private/internal-site/` or `zones/internal/` and are ignored by git.

## Deployment Rule

The Cloudflare Pages public project may deploy only the output of:

```sh
npm run build
```

That means the deployed artifact is `dist/` only. The public project must never deploy:

- `private/`
- `zones/private/`
- `zones/internal/`
- local private markdown files
- internal HTML pages

## Required Verification Before Push or Deploy

Run a public build and scan the public source/build output before every push or deploy:

```sh
npm run lint
npm run build
grep -RInEi 'handles|instagram|tiktok|youtube|discord|twitter|x\.com|threads|snapchat|twitch|username|@[a-z0-9_\.]+' src public dist index.html README.md --exclude-dir=node_modules || true
```

Allowed public matches are limited to generic public-safe text and topical game-development content. Actual handles, usernames, account-claiming checklists, social URLs, and private operational notes are forbidden in public output.
