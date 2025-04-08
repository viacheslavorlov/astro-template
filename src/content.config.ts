import { defineCollection, z } from "astro:content";

const baseInfo = defineCollection({
  // Type-check frontmatter using a schema
  type: "content",
  schema: z.object({
    phone: z.string().optional(),
    address: z.string().optional(),
    vk: z.string().optional(),
    whatsapp: z.string().optional(),
    telegram: z.string().optional(),
    ogrn: z.string().optional(),
    inn: z.string().optional(),
    fio: z.string().optional(),
    yurAddress: z.string().optional(),
    bank: z.string().optional(),
    bik: z.string().optional(),
    bill1: z.string().optional(),
    bill2: z.string().optional(),
  }),
});

const seo = defineCollection({
  // Type-check frontmatter using a schema
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    favicon: z.string(),
  }),
});

export const collections = { baseInfo, seo };
