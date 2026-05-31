# WWW-HQ Ports

- Public WWW-HQ local app: `http://127.0.0.1:3195/`
- Private WWW-HQ local preview: `http://127.0.0.1:3196/`
- Internal WWW-HQ local command center: `http://127.0.0.1:3197/`
- Askander command center remains separate and keeps its own documented ports.
- Official domain: `https://wildweirdworld.com`

The public port `3195` is never reused for private or internal operations.
Cloudflare Pages deploys only the public `dist/` output from `npm run build`.
Internal handles and planning notes must never enter the public bundle.
