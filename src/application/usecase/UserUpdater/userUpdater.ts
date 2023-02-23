import { UserRepository } from "../../../domain/repositories/userRepository";
import { User } from "../../../domain/entities/user";
import { UserGetterById } from "../../../domain/services/UserGetterById/userGetterById";

export class UserUpdaterUseCase {
  private readonly _userRepository: UserRepository;
  private readonly _userGettterById: UserGetterById;
  constructor(userRepository: UserRepository) {
    this._userRepository = userRepository;
    this._userGettterById = new UserGetterById(userRepository);
  }

  async run(data: User): Promise<User> {
    const user = await this._userGettterById.run(data.id);
    const dataToUpdate: User = {
      age: data.age ?? user.age,
      name: data.name ?? user.name,
      id: data.id,
      username: data.username ?? user.username,
    };

    const userUpdated: User = await this._userRepository.update(dataToUpdate);
    return userUpdated;
  }
}
