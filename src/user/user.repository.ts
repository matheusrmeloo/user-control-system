import { Injectable } from '@nestjs/common';
import { ListUsersDTO } from './dto/user.dto';
import { UserEntity } from './user.entity';

@Injectable()
export class UserRepository {
  private users: UserEntity[] = [];

  async save(user: UserEntity) {
    this.users.push(user);
    return user;
  }

  async getAll() {
    return this.users.map((user) => new ListUsersDTO(user.id, user.username));
  }

  async existEmail(email: string) {
    const user = this.users.find((user) => user.email === email);
    return user !== undefined;
  }
}
