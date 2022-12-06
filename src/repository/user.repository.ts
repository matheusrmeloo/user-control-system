import { User } from 'src/interface/user.interface';

export class UserRepository {
  private users = [];

  async save(user: User) {
    return this.users.push(user);
  }
}
