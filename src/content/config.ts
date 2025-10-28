import { defineCollection, z } from "astro:content";

const articulosSchema = z.object({
    title : z.string(),
    img : z.string(),
    description : z.string()
})

const articulos_primer = defineCollection({
    schema: articulosSchema
})

const articulos_segundo = defineCollection({
    schema: articulosSchema
})

const articulos_tercer = defineCollection({
    schema: articulosSchema
})

export const collections = { articulos_primer, articulos_segundo, articulos_tercer };