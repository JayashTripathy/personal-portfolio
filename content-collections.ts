import { defineCollection, defineConfig } from "@content-collections/core";
 
const notes = defineCollection({
  name: "notes",
  directory: "content/notes",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string(),
  }),
});

// const snippets = defineCollection
 
export default defineConfig({
  collections: [notes],
});