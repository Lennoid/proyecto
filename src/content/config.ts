import { defineCollection, z } from "astro:content";

const articulos = defineCollection({
    schema: z.object({
        title: z.string(),
        img: z.string(),
        description: z.string()
    })
})

export const collections = { articulos };