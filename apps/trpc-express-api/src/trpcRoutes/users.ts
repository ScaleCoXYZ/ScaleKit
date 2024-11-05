import { z } from "zod";
import { t } from "./trpc";
import { UserController } from "../controllers/User.controller";

export const usersRouter = t.router({
  list: t.procedure
    .input(
      z.object({
        page: z.number().min(1).default(1),
        limit: z.number().min(1).max(100).default(10),
      })
    )
    .query(async ({ input }) => {
      const userController = new UserController();
      return userController.list({
        page: input.page,
        limit: input.limit,
      });
    }),
});
