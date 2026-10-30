import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { basename, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { serviceDetails } from '../src/site.js';

// These image variants are build artifacts: never change the original files.
const projectRoot = fileURLToPath(new URL('../', import.meta.url));
const outputDir = join(projectRoot, 'public', '_responsive');
const manifestPath = join(projectRoot, 'src', 'generated', 'homepage-responsive.json');
const heroPrimary = '/assets/rak-display-bioxine/1ebe3b6d-1102-440d-80e9-8af4d444d7f2.webp';
const heroSecondary = [
  '/assets/neon-box/neon-box-sakala.webp',
  '/assets/booth-exhibition/0452bbb6-c756-4e37-9c10-91a6274065b0.webp',
];
const sourcePaths = [...new Set([heroPrimary, ...serviceDetails.map((s) => s.assetImage), ...heroSecondary])];
const manifest = {};

await mkdir(outputDir, { recursive: true });
await mkdir(dirname(manifestPath), { recursive: true });

for (const sourceUrl of sourcePaths) {
  if (!/^\/assets\/[a-zA-Z0-9/_-]+\.webp$/.test(sourceUrl)) {
    throw new Error('Unexpected homepage image path: ' + sourceUrl);
  }

  const inputPath = join(projectRoot, 'public', sourceUrl.slice(1));
  const bytes = await readFile(inputPath);
  const metadata = await sharp(bytes).metadata();
  if (!metadata.width || !metadata.height) {
    throw new Error('Unable to read image dimensions: ' + sourceUrl);
  }

  const label = basename(sourceUrl, '.webp').replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
  const hash = createHash('sha256').update(bytes).digest('hex').slice(0, 10);
  const widths = [...new Set([360, 640, 960, Math.min(1200, metadata.width)])]
    .filter((width) => width <= metadata.width)
    .sort((a, b) => a - b);
  const variants = [];

  for (const width of widths) {
    const filename = label + '-' + hash + '-w' + width + '.webp';
    const target = join(outputDir, filename);
    await sharp(bytes).resize({ width }).webp({ quality: 76, effort: 4 }).toFile(target);
    variants.push({ width, url: '/_responsive/' + filename });
  }

  manifest[sourceUrl] = {
    srcset: variants.map((v) => v.url + ' ' + v.width + 'w').join(', '),
    originalWidth: metadata.width,
  };
  console.log('Responsive image:', sourceUrl, '→', variants.map((v) => v.width).join('/'));
}

await writeFile(manifestPath, JSON.stringify(manifest, null, 2) + '\n');
console.log('Prepared ' + sourcePaths.length + ' homepage image sources.');
