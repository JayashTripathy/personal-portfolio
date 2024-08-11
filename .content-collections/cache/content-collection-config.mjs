// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
var notes = defineCollection({
  name: "notes",
  directory: "content/notes",
  include: "**/*.md",
  schema: (z) => ({
    title: z.string(),
    summary: z.string()
  })
});
var content_collections_default = defineConfig({
  collections: [notes]
});
export {
  content_collections_default as default
};
