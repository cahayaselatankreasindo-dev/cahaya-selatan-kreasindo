# CHANGELOG.md - Cahaya Selatan Kreasindo

> Hanya perubahan terverifikasi dari git log dan inspeksi 2026-09-13.

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
