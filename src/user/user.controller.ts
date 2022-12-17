import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserEntity } from './user.entity';
import { UserService } from './user.service';
import { v4 as uuid } from 'uuid';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(201)
  async createUser(@Body() req: CreateUserDTO) {
    const user: UserEntity = new UserEntity();
    user.email = req.email;
    user.username = req.username;
    user.password = req.password;
    user.id = uuid();
    await this.userService.createUser(user);

    return { status: 201, payload: { id: user.id } };
  }

  @Get()
  @HttpCode(200)
  async getUsers() {
    return await this.userService.getUsers();
  }
}
