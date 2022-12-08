import { Injectable } from '@nestjs/common';
import { User } from './user.interface';

@Injectable()
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
