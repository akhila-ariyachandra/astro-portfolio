import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: {
    title: z.string(),
    date: z.date(),
    updated: z.date().optional(),
    description: z.string(),
    banner: z.string(),
    unsplashCredits: z
      .object({
        photographer: z.string(),
        link: z.string().url(),
      })
      .optional(),
  },
});

const snippets = defineCollection({
  schema: {
    title: z.string(),
    description: z.string(),
  },
});

export const collections = {
  blog,
  snippets,
};
