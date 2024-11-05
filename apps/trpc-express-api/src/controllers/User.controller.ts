import { UserDto } from "../domains/users/User.dto";
import { UserRepository } from "../domains/users/User.repository";
import {
  PaginatedResponse,
  paginationData,
  ControllerPaginationParams,
} from "../utils/pagination";

export class UserController {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async list(
    params: ControllerPaginationParams
  ): Promise<PaginatedResponse<UserDto>> {
    const { page, limit } = params;
    const offset = (page - 1) * limit;
    const [users, total] = await Promise.all([
      this.userRepository.list({ offset, limit }),
      this.userRepository.count(),
    ]);
    return {
      items: users,
      pagination: paginationData(page, limit, total),
    };
  }
}
