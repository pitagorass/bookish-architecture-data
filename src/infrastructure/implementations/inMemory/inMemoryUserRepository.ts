import { User } from "domain/entities/user";
import { UserRepository } from "../../../domain/repositories/userRepository";

export class InmemoryUserRepository implements UserRepository {
  userData: User[] = [];

  async getAll(): Promise<User[]> {
    return this.userData;
  }
  async save(user: User): Promise<User> {
    this.userData.push(user);
    return user;
  }
  async getByUserName(username: string): Promise<User | null> {
    const userFound = this.userData.find((x) => x.username === username);
    if (userFound === undefined) return null;
    return userFound;
  }

  async update(user: User): Promise<User> {
    return user;
  }
  async delete(user: User): Promise<void> {}
  async getById(id: string): Promise<User | null> {
    return null;
  }
}