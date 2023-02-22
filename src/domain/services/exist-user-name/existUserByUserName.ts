import { UserRepository } from "../../repositories/userRepository";
export class ExistUserByUserName {
  private readonly _userRespository: UserRepository;

  constructor(userRepository: UserRepository) {
    this._userRespository = userRepository;
  }
  async run(userName: string): Promise<boolean> {
    const user = await this._userRespository.getByUserName(userName);
    if (user !== null) return true;
    return false;
  }
}
