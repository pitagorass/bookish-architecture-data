import { User } from "../../../domain/entities/user";
import { UserAlredyExistsException } from "../../../domain/exceptions/UserAlredyExistsException";
import { UserRepository } from "../../../domain/repositories/userRepository";
import { ExistUserByUserName } from "../../../domain/services/exist-user-name/existUserByUserName";

export class UserCreatorUseCase {
  private readonly _userRepository: UserRepository;
  private readonly _existUserByUserName: ExistUserByUserName;

  constructor(userRespository: UserRepository) {
    this._userRepository = userRespository;
    this._existUserByUserName = new ExistUserByUserName(userRespository);
  }

  async run(body: User): Promise<User> {
    const existUser: boolean = await this._existUserByUserName.run(
      body.username
    );
    if (existUser) throw new UserAlredyExistsException();
    const userCreated: User = await this._userRepository.save(body);
    return userCreated;
  }
}
