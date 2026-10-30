import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { serviceDetails } from './site.js';

const servicePaths = new Set(serviceDetails.map((service) => `/layanan/${service.slug}/`));

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog/' }),
  schema: z.object({
    title: z.string().min(10),
    description: z.string().min(50).max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().min(2),
    image: z.string().startsWith('/'),
    imageAlt: z.string().optional(),
    category: z.enum([
      'Booth & Pameran',
      'Rak Display & Retail',
      'POSM & Branding',
      'Neon Box & Signage',
      'Visual Merchandising',
    ]).optional(),
    relatedService: z.string().refine((path) => servicePaths.has(path), 'Layanan terkait tidak ditemukan').optional(),
    keywords: z.string().optional(),
    draft: z.boolean().default(false),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).optional(),
  }).refine((data) => data.draft || Boolean(data.relatedService), {
    message: 'Artikel terbit wajib memiliki layanan terkait',
    path: ['relatedService'],
  }),
});

export const collections = { blog };
