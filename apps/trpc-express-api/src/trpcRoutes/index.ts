import { z } from "zod";
import { productsRouter } from "./products";
import { usersRouter } from "./users";
import { t } from "./trpc";

export const appRouter = t.router({
  hello: t.procedure
    .input(z.string().nullish())
    .query(({ input }) => `Hello ${input ?? "World"}`),
  users: usersRouter,
  products: productsRouter,
});

export type AppRouter = typeof appRouter;
