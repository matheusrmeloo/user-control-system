import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(201)
  async createUser(@Body() req: CreateUserDTO) {
    return await this.userService.createUser(req);
  }

  @Get()
  @HttpCode(200)
  async getUsers() {
    return await this.userService.getUsers();
  }
}
