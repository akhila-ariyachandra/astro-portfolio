import { z, defineCollection } from "astro:content";

const blog = defineCollection({
  schema: {
    title: z.string(),
    date: z.date(),
    /* updated: z.date().isOptional(), */
    description: z.string(),
    /* unsplashCredits: z
      .object({
        photographer: z.string(),
        link: z.string(),
      })
      .isOptional(), */
  },
});

export const collections = {
  blog,
};
