import { User } from "../../../domain/entities/user";
import { UserNotFoundExeption } from "../../../domain/exceptions/UserNotFoundExeption";
import { UserRepository } from "../../../domain/repositories/userRepository";

export class UserGetterById {
  private readonly _userRepository: UserRepository;
  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
  }
  async run(id: string): Promise<User> {
    const user = await this._userRepository.getById(id);
    if (user === null) {
      throw new UserNotFoundExeption();
    }
    return user;
  }
}
