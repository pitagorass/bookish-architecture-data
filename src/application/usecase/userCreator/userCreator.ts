import { User } from "domain/entities/user"
import { UserRepository } from "domain/repositories/userRepository"

export class UserCreatorUseCase {
    private readonly _userRepository: UserRepository
    private readonly _existUserByUserName: existUserByUserName

    constructor(userRespository: UserRepository) {
        this._userRepository = userRespository
        this._existUserByUserName = new ExistUserByUserName
    }

    async run(body: User): Promise<User> {
        const existUser: boolean = await this._existUserByUserName.run(body.username)
        if (existUser) throw new UserAlredyExistsException()
        const userCreated: User = await this._userRepository.save(body)
        return userCreated
    }
}