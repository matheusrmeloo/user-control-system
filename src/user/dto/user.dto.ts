import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';
import { IsUniqueEmail } from '../validator/user.validator';

export class CreateUserDTO {
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  @IsUniqueEmail({ message: 'Email already exists' })
  email: string;

  @MinLength(6)
  @IsNotEmpty()
  password: string;
}
