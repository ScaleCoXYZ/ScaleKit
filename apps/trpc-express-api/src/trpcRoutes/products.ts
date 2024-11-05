import { z } from "zod";
import { t } from "./trpc";
import { ProductController } from "../controllers/Product.controller";

export const productsRouter = t.router({
  list: t.procedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).max(100).default(10),
      })
    )
    .query(async ({ input }) => {
      const productController = new ProductController();
      return productController.listProducts({
        page: input.page,
        limit: input.limit,
      });
    }),

  getById: t.procedure.input(z.number()).query(({ input }) => {
    return { id: input, name: "John Doe", email: "john@example.com" };
  }),
});
