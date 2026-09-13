# DEVELOPMENT-ROADMAP.md - Cahaya Selatan Kreasindo

> Status per 2026-09-13, berbasis bukti repo (bukan asumsi).

## PHASE 1 - FOUNDATION [COMPLETED]

- [COMPLETED] Repo Astro 7 + Tailwind v4 + sitemap (package.json, astro.config.mjs)
- [COMPLETED] Node 22 pin, gitignore (node_modules/dist/.astro/.wrangler)
- [COMPLETED] Satu layout Base + SEO head + JSON-LD dasar
- [COMPLETED] Konten terpusat `src/site.js`
- [COMPLETED] Font self-hosted + preload

## PHASE 2 - CORE WEBSITE [COMPLETED]

- [COMPLETED] Homepage: hero 3-panel, layanan 6 kartu bergambar, portfolio 4 kategori (12 item), FAQ 6, CTA final
- [COMPLETED] Header sticky + menu mobile, Footer kontak/workshop/legal
- [COMPLETED] Lightbox native di 3 permukaan galeri
- [COMPLETED] Palet `csk-*` + Montserrat-first di seluruh UI (grep 0 `brand-` di luar definisi token)

## PHASE 3 - SERVICE PAGES [COMPLETED]

- [COMPLETED] `/layanan` hub: kartu + daftar produk + CTA
- [COMPLETED] `/layanan/:slug` -6 via `getStaticPaths`: intro, scope, grup item, galeri sampel, FAQ+schema, layanan lain
- [COMPLETED] `/apa-itu-posm` edukasi + FAQ + CTA

## PHASE 4 - PORTFOLIO [COMPLETED dengan catatan]

- [COMPLETED] Homepage 12 item / 4 kategori + lightbox
- [COMPLETED] Halaman `/portofolio`: chip anchor + grup per kategori + lightbox
- [IN PROGRESS] Sinkronisasi dua sumber (`featuredPortfolio` vs `portfolio[]`) - judul/kategori bisa divergen

## PHASE 5 - LEAD GENERATION [COMPLETED minimal]

- [COMPLETED] CTA WhatsApp berkonteks (`waLink(msg)` per halaman/layanan/FAQ)
- [NOT STARTED] Form inquiry / tracking konversi (tidak ada backend - butuh keputusan)

## PHASE 6 - SEO [IN PROGRESS]

- [COMPLETED] Title/description/canonical/OG/Twitter per halaman, sitemap, robots, llms.txt, LocalBusiness+Breadcrumb+FAQ schema
- [IN PROGRESS] Tagline/JSON-LD/footer masih sempit ("Event Booth & Exhibition Specialist")
- [NOT STARTED] Keyword research formal, 404 kustom, audit Rich Results

## PHASE 7 - PERFORMANCE [NOT STARTED]

- [NOT STARTED] 183 file `public/assets` mentah (tanpa optimasi build) - risiko LCP. Opsi: kompres sumber atau pindah slot penting ke `astro:assets`
- [NOT STARTED] Audit bobot font (Inter 8 file masih di-serve walau fallback)

## PHASE 8 - ANALYTICS [NOT STARTED]

- [NOT STARTED] Analytics, monitoring build, error tracking - tidak ada di repo

## CURRENT PRIORITY

Amankan working tree (2 commit belum di-push - keputusan user), lalu: hapus token
`brand-*`, konsolidasikan 6 pemakaian `ink`, verifikasi logo/favicon, buang halaman
uji + kode mati.

## NEXT 5 RECOMMENDED ACTIONS

1. `npm run build` pasca-migrasi + cek visual tiap viewport (dampak: cegah regresi; mudah).
2. Hapus `--color-brand-*` + migrasikan `ink`?`csk-black`; build ulang (dampak: tutup kebocoran palet).
3. Hapus `test-assets.astro`, `ServiceIcon.astro`, `src/img/logo.webp` tak terpakai; putuskan nasib `data/` (dampak: repo bersih, build jujur).
4. Verifikasi/ganti `logo.webp` (byte JFIF) + regenerasi `og-image.jpg` palet baru (dampak: favicon/OG/share benar).
5. Update tagline `site.js` + footer copyright (butuh keputusan copy; berdampak SEO + positioning).
