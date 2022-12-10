import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserRepository {
  private users = [];

  async save(user: CreateUserDTO) {
    this.users.push(user);
    return user;
  }

  async getAll() {
    return this.users;
  }

  async existEmail(email: string) {
    const user: boolean = this.users.find((user) => user.email === email);
    return user !== undefined;
  }
}
