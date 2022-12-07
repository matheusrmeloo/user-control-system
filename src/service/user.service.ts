import { Injectable } from '@nestjs/common';
import { User } from 'src/interface/user.interface';
import { UserRepository } from 'src/repository/user.repository';

@Injectable()
export class UserService {
  private userRepository = new UserRepository();

  async createUser(data: User) {
    return this.userRepository.save(data);
  }

  async getUsers() {
    return this.userRepository.getAll();
  }
}
