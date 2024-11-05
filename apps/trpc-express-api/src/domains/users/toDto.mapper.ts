import { UserDto } from "./User.dto";
import { UserEntity } from "./User.entity";

export function toDto(entity: UserEntity): UserDto {
  return {
    id: entity.id,
    email: entity.email,
    name: entity.name,
    createdAt: entity.createdAt,
    updatedAt: entity.updatedAt,
  };
}
