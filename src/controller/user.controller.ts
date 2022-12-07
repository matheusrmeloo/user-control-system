import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { User } from 'src/interface/user.interface';
import { UserService } from 'src/service/user.service';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post()
  @HttpCode(201)
  async createUser(@Body() req: User) {
    return await this.userService.createUser(req);
  }

  @Get()
  @HttpCode(200)
  async getUsers() {
    return await this.userService.getUsers();
  }
}
