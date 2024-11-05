import { UserEntity } from "./User.entity";

import { OffsetPaginationParams } from "../../utils/pagination";
import { fakeUsers } from "./User.fakedata";

export class UserRepository {
  async list(params: OffsetPaginationParams): Promise<UserEntity[]> {
    const { offset, limit } = params;
    return fakeUsers.slice(offset, offset + limit);
  }

  async count(): Promise<number> {
    return fakeUsers.length;
  }
}
