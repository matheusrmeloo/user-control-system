import { User } from 'src/interface/user.interface';

export class UserRepository {
  private users = [];

  async save(user: User) {
    this.users.push(user)
    return user;
  }

  async getAll() {
    return this.users;
  }
}
