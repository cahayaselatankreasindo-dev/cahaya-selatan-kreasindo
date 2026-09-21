# CHANGELOG.md - Cahaya Selatan Kreasindo

> Hanya perubahan terverifikasi dari git log dan inspeksi 2026-09-13.

## 2026-09-21 - Google Analytics 4 dipasang di Base.astro

Files modified:

- `src/layouts/Base.astro` — tambahan `const GA_ID = 'G-YH56PC1XQZ'` di frontmatter
  + script GA4 sebelum `</head>`: 1 tag external `googletagmanager.com/gtag/js` +
  1 inline (via `set:html`) `gtag('js')` & `gtag('config')`. Dibungkus
  `import.meta.env.PROD && (...)` sehingga script hanya muncul di build produksi
  (deploy Cloudflare), tidak di dev server.

Verification: `npm run build` 18 pages, 0 error; `dist/index.html` berisi
`googletagmanager.com` + `G-YH56PC1XQZ`.

## 2026-09-21 - Tahap 3.2: Optimasi aset public/assets/ (video orphans + kompresi gambar)

Perubahan struktur:

- `public/assets/video-produksi/` (18 file, ~74.9 MB) dipindah ke `_raw-videos/` di root
  proyek. Folder ini berisi video MP4 yang TIDAK dirujuk di `src/` sama sekali — orphans
  staging yang ikut ke deploy. Folder tidak dihapus, hanya dipindah keluar dari `public/`.
- `_raw-videos/` + `_raw-assets-original/` ditambahkan ke `.gitignore` agar tidak ikut
  commit/deploy.

Kompresi:

- 76 file gambar (webp/png/jfif) > 100 KB di `public/assets/` dikompres ulang via
  `sharp` quality 80, output WebP, menimpa file yang sama (nama tidak berubah).
- 8 aset LCP homepage dikecualikan (sudah WebP kecil, optimal): rak-display-bioxine/1ebe3b6d,
  neon-box/neon-box-sakala, booth-exhibition/0452bbb6, display-akrilik-custom/
  {gondola-supermarket-neon-sign-led, akrilik-kosmetik-produk-kecantikan-golden},
  neon-box/neon-box-custom-relis-studio, branding-store/20bd3285, tenda-event/a46ab99c.
- Backup asli (sebelum kompres) disimpan di `_raw-assets-original/` (root, gitignored).
- Target: 76 file (before 24.7 MB → after 22.2 MB, hemat ~2.5 MB pada subset gambar).
- Hasil: `public/assets/` turun dari 104.9 MB → ~30 MB (gambar tersisa + LCP; video pindah).

Verification: `npm run build` sukses, 18 pages, 0 error. `public/assets/video-produksi/`
hilang dari disk; `_raw-videos/` berisi 18 file video.

## 2026-09-21 - Tahap 2: Perbaikan menengah (font Inter, kode mati, 404, token)

Files deleted:

- `public/fonts/inter-400/500/600/700-latin(-ext).woff2` — 8 file Inter. Inter hanya
  muncul di fallback stack font (tidak dipakai langsung oleh UI), jadi aman dihapus.
- `src/data/getAssets.js` — helper fs, 0 pemakai di seluruh `src/`.
- `src/data/assets.js` — katalog `assetCategories`, 0 pemakai (sumber terkenalnya
  `test-assets.astro` sudah dihapus di Tahap 1). Folder `src/data/` ikut dihapus
  karena sudah kosong.
- `src/components/ServiceIcon.astro` — 0 pemakai di seluruh `src/`.

Files created:

- `src/pages/404.astro` — halaman 404 custom dengan layout Base. Heading "404"
  (text-csk-amber, 7xl), teks "Halaman tidak ditemukan" (text-csk-gray), tombol
  "Kembali ke Beranda" (bg-csk-amber / text-csk-black). Konsisten dengan palet CSK.

Files modified:

- `src/styles/fonts.css` — 8 blok `@font-face` Inter dihapus; sekarang hanya
  Montserrat 400/500/600/700 (latin + latin-ext, 8 file).
- `src/styles/global.css` — fallback `"Inter"` dihapus dari `--font-sans`,
  `--font-heading`, `--font-body` (Montserrat-first, sekarang tanpa Inter).

Verification: `npm run build` sukses, 18 pages (+404), 0 error.

## 2026-09-21 - Tahap 1: Quick wins (test page, satukan portfolio, tagline, logo, OG)

Files deleted:

- `src/pages/test-assets.astro` — halaman uji mentah yang ikut ke-build; tidak ada link
  dari navigasi/footer/sitemap, jadi aman dihapus.

Files modified:

- `src/site.js` — `tagline` diupdate ke "Production Partner untuk Brand dan Bisnis"
  (field description tidak disentuh). Flag `featured: true` ditambahkan ke 11 item
  `portfolio`: 4 Rak Display (gondola-potens, rak-toko-potens, floor-evo, counter-nky),
  2 Neon Box & Signage (huruf-timbul-gorisa, signage-zakku), 1 Booth & Pameran
  (mini-counter-beco), 4 Proses Produksi (workshop, finishing, quality-check, standee-potens).
- `src/pages/index.astro` — `featuredPortfolio` lokal 12 item dihapus; sekarang
  `portfolio.filter(p => p.featured)` (11 item). Kategori homepage diubah dari
  "Retail & Merchandising / Signage & Branding / Booth & Custom Build" menjadi
  kategori `site.js` yang sudah ada: Rak Display, Neon Box & Signage, Booth & Pameran,
  Proses Produksi. Gambar portfolio pakai komponen `Picture` (astro:assets, dioptimasi
  build-time) menggantikan `AssetImage` mentah.
- `src/components/Footer.astro` — copyright lama "Event Booth & Exhibition Specialist"
  diganti ke `site.tagline` dinamis (muncul di semua footer via Base.astro).
- `public/img/logo.webp` — di-regenerate dari `public/img/logo-horizontal.svg`
  (SVG asli) dengan sharp: 76 KB JFIF → 7 KB WebP valid (magic `RIFF`+`WEBP`).
- `scripts/og-image.mjs` — generator diupdate ke palet CSK: background `#0B0B0B`,
  strip bawah `#FF8A3D`, teks `#F8F7F4`/`#FF8A3D`, pakai `site.tagline` dinamis,
  logo dari SVG. Output WebP menggantikan JPEG (1200×630, 27 KB).

Verification: `npm run build` sukses, 17 pages (test-assets dihapus), 0 error.

## 2026-09-21 - Enrichment konten halaman layanan (kapabilitas & material)

Files modified:

- `src/pages/layanan/[slug].astro` — section baru "Spesifikasi & Material" di bawah grid
  item, muncul di semua 6 halaman layanan. 3 kartu: Material tersedia (akrilik, plat besi
  & metal cutting, ACP, MDF/HMR, plywood, LED & kelistrikan, large format printing),
  Metode fabrikasi (pemotongan presisi laser/CNC, pengelasan rangka, finishing cat &
  stiker, instalasi LED, sistem knock-down event), Kapasitas & lead time (workshop Serpong,
  Jabodetabek, lead time 7–14 hari kerja, kapasitas 50+ unit/bulan).
- `src/site.js` — meta description 5 layanan diperkaya kata kunci teknis: booth → "vendor
  fabrikasi booth Jakarta"; posm & rak-display → "posm manufacturer"/"display manufacturer
  Jakarta"; signage → "Signage & neon box Jakarta"; visual-merchandising → "fit out
  contractor Jakarta".
- `docs/SEO-STRATEGY.md` — cluster baru "Partner/Vendor" (target EO/agensi/arsitek, bukan
  end client) + tabel mapping 6 slug ke kata kunci vendor.

Verification: `npm run build` sukses, 18 pages, 0 error.

## 2026-09-13 - Documentation system created

Files created:

- `docs/PROJECT-BRAIN.md` (master document: identitas, stack aktual, status, risiko R1-R8)
- `docs/ARCHITECTURE.md` (arsitektur aktual: Astro 7.3.1, Tailwind v4, dua jalur gambar, satu layout)
- `docs/DEVELOPMENT-ROADMAP.md` (fase 1-8 + 5 aksi berikut)
- `docs/SEO-STRATEGY.md` (implementasi saat ini + daftar riset yang belum dilakukan)
- `docs/CHANGELOG.md` (file ini)

Files modified: (tidak ada - dokumentasi saja)

Important findings from the audit (fakta, bukan asumsi):

- Struktur lengkap: 51 file di `src/` (9 komponen, 11 route statis, 1 dynamic `[slug].astro`,
  2 endpoint teks, 1 layout, 23 webp, 2 css, 2 data js); `public/assets` = 183 file / 16 folder.
- Satu-satunya dynamic route: `layanan/[slug].astro` (6 slug, `getStaticPaths`). Tidak ada `[...slug]`.
- Dua jalur gambar resmi: `Picture` (astro:assets?`src/img/`) dan `AssetImage` (mentah?`public/assets/`).
- Dua sumber portfolio resmi: `featuredPortfolio` (index, 12 item) vs `portfolio[]` (site.js, 22 item).
- Helper `getAssets.js` (0 pemakai) dan `ServiceIcon` (0 pemakai) = kode mati; `assetCategories` dipakai test-assets.
- 0 pemakaian `brand-*` di kode UI; 6 pemakaian `ink`; token `--color-brand-*` tinggal definisi.
- `public/img/logo.webp` berisi byte JFIF (risiko favicon/JSON-LD); `test-assets.astro` ikut ke-build.
- Working copy 2 commit di depan `origin/main` (belum di-push saat audit).

## History (ringkas, dari `git log`)

- 2026-09-13: `3d04904` migrasi 8 pages `brand-*` ? `csk-*`; `3d5c1cb` Breadcrumbs ? amber.
- 2026-09-10/11: fondasi brand (Montserrat + token `csk-*`, BRAND_GUIDELINE.md, CLAUDE.md),
  redesign homepage (hero 3-panel, layanan bergambar, portfolio 4 kategori, FAQ, CTA final).
- 2026-09-09: katalog aset `public/assets` (183 file) + `AssetImage` + featured portfolio.
- 2026-09-06: hero/services gallery + konten.
- 2026-09-05: checkpoint sebelum AI agent.
- 2026-09-02: halaman layanan per-keyword + panduan POSM + rename gambar SEO + halaman legal.
