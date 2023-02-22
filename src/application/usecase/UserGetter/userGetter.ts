import { User } from "domain/entities/user";
import { UserRepository } from "../../../domain/repositories/userRepository";
export class UserGetterUseCase {
  private readonly _userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }
  async run(): Promise<User[]> {
    const users: User[] = await this._userRepository.getAll();
    return users;
  }
}
