# Cahaya Selatan Kreasindo

Website B2B advertising production dan visual merchandising - booth pameran,
rak display, signage, neon box, branding, event, dan custom production.

## Teknologi

- **Framework**: [Astro](https://astro.build) 7 (static-first, output `dist/`)
- **Styling**: Tailwind CSS v4 (design tokens di `src/styles/global.css`)
- **Deploy**: Cloudflare Pages
- **Version control**: GitHub

## Development

```bash
npm install       # install dependencies
npm run dev       # start dev server
npm run build     # build production (gerbang selesai)
npm run preview   # preview build
```

## Project Documentation

- [docs/PROJECT-BRAIN.md](docs/PROJECT-BRAIN.md) - master document (baca dulu)
- [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) - arsitektur aktual
- [docs/DEVELOPMENT-ROADMAP.md](docs/DEVELOPMENT-ROADMAP.md) - status fase + aksi berikut
- [docs/SEO-STRATEGY.md](docs/SEO-STRATEGY.md) - implementasi SEO saat ini
- [docs/CHANGELOG.md](docs/CHANGELOG.md) - riwayat perubahan terverifikasi

## AI Agent Workflow

Sebelum perubahan signifikan, AI agent wajib:

1. Read PROJECT-BRAIN.md
2. Inspect DEVELOPMENT-ROADMAP.md
3. Check ARCHITECTURE.md
4. Check CHANGELOG.md
5. Inspect relevant existing code
6. Avoid duplicate work
7. Avoid unnecessary dependencies
8. Test changes (`npm run build`)
9. Update CHANGELOG.md after significant changes
