import { OffsetPaginationParams } from "../../utils/pagination";
import { toDto } from "./toDto.mapper";
import { UserDto } from "./User.dto";
import { UserRepository } from "./User.repository";

export class UserService {
  private userRepository: UserRepository;

  constructor() {
    this.userRepository = new UserRepository();
  }

  async listUsers(params: OffsetPaginationParams): Promise<UserDto[]> {
    return this.userRepository.list(params).then((users) => users.map(toDto));
  }
}
