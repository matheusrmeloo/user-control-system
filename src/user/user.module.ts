import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';
import { UserService } from './user.service';
import { EmailValidator } from './validator/user.validator';

@Module({
  controllers: [UserController],
  providers: [UserService, UserRepository, EmailValidator],
})
export class UserModule {}
