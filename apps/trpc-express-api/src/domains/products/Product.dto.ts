import { z } from "zod";

const productSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  price: z.number(),
  imageUrl: z.string().optional(),
});

export type ProductDto = z.infer<typeof productSchema>;
