# Draft2Live Landing (EN)

Marketing landing page for [Draft2Live](https://draft2live.ai) — English version.

## Quick start

```bash
npm install
npm run dev
```

Open <http://localhost:3000>. The root path redirects to `/en/`.

## Build

```bash
npm run build
```

Static export is written to `./out/`. Deploy the contents to any static host
(nginx, Caddy, Netlify, Vercel, Cloudflare Pages, etc).

## Tech stack

- Next.js 16 (App Router, `output: 'export'`)
- next-intl 4.9 — single locale (`en`), `localePrefix: 'always'`
- Tailwind CSS 4
- Framer Motion + GSAP for animations
- TypeScript

## Where the copy lives

- **Marketing copy** (hero, features, pricing, FAQ, footer, etc.) —
  `messages/en.json`. Translations are loaded via `useTranslations()`.
- **Legal pages** (cookies, privacy, terms) — inline JSX in
  `src/app/cookies/page.tsx`, `src/app/privacy/page.tsx`,
  `src/app/terms/page.tsx`. These are NOT under `[locale]/` and are not
  routed through next-intl.

## Pricing CTAs

Pricing buttons link to the Draft2Live register flow:

```
https://draft2live.ai/en/register?plan=<plan>&period=<monthly|annual>
```

Plan slugs and the URL builder live in `src/components/sections/Pricing.tsx`.

## Adding a new locale

The project is currently EN-only but the next-intl scaffolding is preserved.
To add a locale:

1. Add the code to `routing.locales` in `src/i18n/routing.ts`.
2. Create `messages/<code>.json` (translate values, keep keys).
3. Run `npm run build` — `generateStaticParams()` picks it up automatically.
