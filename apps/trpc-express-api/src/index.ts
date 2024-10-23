import * as express from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";
import { initTRPC } from "@trpc/server";

const t = initTRPC.create();
const appRouter = t.router({
  hello: t.procedure
    .input(z.string().nullish())
    .query(({ input }) => `Hello ${input ?? "World"}`),
});

export type AppRouter = typeof appRouter;

const app = express();

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
  })
);

app.listen(4000, () => {
  console.log("tRPC server running on http://localhost:4000");
});
