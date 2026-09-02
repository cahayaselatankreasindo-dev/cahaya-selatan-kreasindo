# Cahaya Selatan Kreasindo — Company Profile

Static Astro site for a booth/display fabrication company in Tangerang Selatan.
Deployed as static files on Cloudflare Pages. No backend, no forms — contact is
WhatsApp + mailto only.

## Commands

```bash
npm run dev      # local dev server
npm run build    # -> dist/
npm run preview  # serve dist/
```

Cloudflare Pages: build command `npm run build`, output directory `dist`.

## Layout

```
src/site.js            all content: contact info, hours, services, products, portfolio, areas
src/layouts/Base.astro meta/SEO/OG/LocalBusiness+Breadcrumb JSON-LD, wraps Header + Footer
src/components/        Header, Footer, Section, Picture, Breadcrumbs
src/pages/             index, tentang, layanan, portofolio, area-layanan, kontak
src/styles/global.css  Tailwind v4 import + @theme brand tokens
src/styles/fonts.css   self-hosted Inter @font-face (files in public/fonts/)
src/img/               portfolio source photos — Astro optimizes these at build
public/img/logo.webp   logo + favicon (referenced by URL, must stay in public/)
public/og-image.jpg    1200x630 social share card
```

## Conventions

- **Content lives in `src/site.js`**, not in the pages. Adding a service, product,
  or portfolio item means editing the arrays there — pages map over them.
- Brand colors are `--color-brand-50..900` in `src/styles/global.css` `@theme`,
  used as `bg-brand-500`, `text-brand-700`, etc. Light blue. Don't hardcode hex
  in components.
- Copy is Indonesian, informal-but-professional, sourced from the client's
  original Google Sites page. Keep that voice.
- Design is minimalist: white background, thin `border-brand-100` on cards,
  rounded-2xl, one accent color. No gradients beyond the hero wash, no drop
  shadows except `hover:shadow-md`.
- Every WhatsApp link goes through `waLink(msg)` from `src/site.js` so the number
  is defined once.
- Images: use `<Picture name="file-slug" alt sizes />` (`src/components/Picture.astro`),
  which pulls from `src/img/` and emits a responsive srcset. Never `<img src="/img/...">`
  for portfolio photos — that skips Astro's optimizer.
- Every page passes `title`, `description`, and `breadcrumbs` to `Base.astro`, and gives
  its first `<Section>` `as="h1"`. One H1 per page, keyword-bearing titles (not "Beranda").

## Portfolio images

Photos in `public/img/` were downloaded from the client's Google Sites page.
Those source URLs are signed and return 403 without a session cookie, so the
local files are the only copy — do not delete them expecting a re-download.
Titles in `portfolio[]` were inferred from the photos; the client may correct them.

## Before finishing

Run `npm run build` — it type-checks routes and catches template errors.
Update `site:` in `astro.config.mjs` when the real domain is known — it feeds canonical
URLs, the sitemap, OG tags, and the LocalBusiness schema `@id`. Still a placeholder
(`cahayaselatankreasindo.pages.dev`) as of the last edit.

After changing schema or meta tags, validate with Google Rich Results Test — curl/grep
confirms the JSON-LD is present but not that Google accepts it.
