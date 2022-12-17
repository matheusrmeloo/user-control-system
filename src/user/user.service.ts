import { Injectable } from '@nestjs/common';
import { UserEntity } from './user.entity';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(data: UserEntity) {
    return this.userRepository.save(data);
  }

  async getUsers() {
    return this.userRepository.getAll();
  }
}
