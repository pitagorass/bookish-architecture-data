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
    const users = this.userData.filter((x) => x.id !== user.id);
    users.push(user);
    this.userData = users;
    return user;
  }
  async delete(user: User): Promise<void> {
    const users = this.userData.filter((x) => x.id !== user.id);
    this.userData = users;
   // return user;
  }
  async getById(id: string): Promise<User | null> {
    const userFuond = this.userData.find((x) => x.id === id);
    if (userFuond === undefined) {
      return null;
    }
    return userFuond;
  }
}
