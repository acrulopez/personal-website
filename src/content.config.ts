import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: file("./src/data/projects/projects.json"),
  schema: z
    .object({
      title: z.string().optional(),
      description: z.string().optional(),
      url: z.string().url().optional(),
      repo: z.string().url().optional(),
      tags: z.array(z.string()).default([]),
      featured: z.boolean().default(false),
      pull_from_github: z.boolean().default(false),
    })
    .superRefine((data, ctx) => {
      // If pull_from_github is enabled, repo URL must be provided
      if (data.pull_from_github && !data.repo) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "repo URL is required when pull_from_github is enabled",
          path: ["repo"],
        });
      }
      // If pull_from_github is disabled, title and description must be provided
      if (!data.pull_from_github && (!data.title || !data.description)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "title and description are required when pull_from_github is disabled",
          path: ["title"],
        });
      }
    }),
});

export const collections = { blog, projects };
