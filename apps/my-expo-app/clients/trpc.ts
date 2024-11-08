import { createTRPCClient, httpBatchLink } from "@trpc/client";

import type { AppRouter } from "../../trpc-express-api/src";
import { createTRPCReact } from "@trpc/react-query";

export const trpcReact = createTRPCReact<AppRouter>();

export const trpcClient = createTRPCClient({
  links: [
    httpBatchLink({
      url: "http://localhost:4000/trpc",
    }),
  ],
});
