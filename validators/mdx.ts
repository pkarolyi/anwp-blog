import { z } from "zod";

export const frontmatterSchema = z.object({
  title: z.string(),
  author: z.object({
    name: z.string(),
    imageSrc: z.string(),
    url: z.string(),
  }),
  date: z.string(),
  description: z.string(),
  summary: z.string().optional(),
  coverSrc: z.string().optional(),
  tags: z.string().array().optional(),
});

export type Frontmatter = z.infer<typeof frontmatterSchema>;
