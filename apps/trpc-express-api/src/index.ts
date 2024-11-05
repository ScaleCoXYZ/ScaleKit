import * as express from "express";
import * as cors from "cors";
import * as trpcExpress from "@trpc/server/adapters/express";
import { appRouter } from "./trpcRoutes";
export type { AppRouter } from "./trpcRoutes";
const app = express();

app.use(
  cors({
    origin: "http://localhost:5173", // Your Remix app's URL
    credentials: true,
  })
);

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
