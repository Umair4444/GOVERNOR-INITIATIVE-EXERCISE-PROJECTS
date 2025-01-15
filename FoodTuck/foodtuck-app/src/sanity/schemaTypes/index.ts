import { type SchemaTypeDefinition } from "sanity";
import { hero } from "@/sanity/mySchema/Hero";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [hero],
};
