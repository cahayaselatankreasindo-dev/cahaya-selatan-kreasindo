import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/blog/' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string().default('Cahaya Selatan Kreasindo'),
    image: z.string().optional(),
    cover: z.string().optional(),
    coverAlt: z.string().optional(),
    category: z.string().optional(),
    service: z.enum([
      'booth-pameran',
      'rak-display-gondola',
      'neon-box-signage',
      'posm-display',
      'visual-merchandising',
      'sewa-peralatan-event',
    ]).optional(),
    updated: z.coerce.date().optional(),
    keywords: z.string().optional(),
    draft: z.boolean().default(false),
    faq: z
      .array(
        z.object({
          q: z.string(),
          a: z.string(),
        }),
      )
      .optional(),
  }),
});

export const collections = { blog };
