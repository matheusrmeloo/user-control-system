import { Injectable } from '@nestjs/common';
import { User } from './user.interface';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(data: User) {
    return this.userRepository.save(data);
  }

  async getUsers() {
    return this.userRepository.getAll();
  }
}
