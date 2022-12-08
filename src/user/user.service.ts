import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async createUser(data: CreateUserDTO) {
    return this.userRepository.save(data);
  }

  async getUsers() {
    return this.userRepository.getAll();
  }
}
