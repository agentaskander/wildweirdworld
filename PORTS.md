# WWW-HQ Ports

- Bookmarks/control page: `http://192.168.1.166:8000/codex/platform/app-bookmarks.html`
- WWW-HQ internal site: `http://127.0.0.1:3195/`
- WWW-HQ public local preview: `http://127.0.0.1:3197/`
- WWW-HQ public live site: `https://www.wildweirdworld.com`
- Private WWW-HQ local preview: `http://127.0.0.1:3196/`
- Askander command center remains separate and keeps its own documented ports.

Port `3195` is reserved for the original internal WWW-HQ site with handle/planning dashboards.
Bookmarks are never served from `3195`.
The public local preview is served from `3197`, never from `3195`.
Cloudflare Pages deploys only the public `dist/` output from `npm run build`.
Internal handles and planning notes must never enter the public bundle.
