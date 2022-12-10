import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailValidator implements ValidatorConstraintInterface {
  constructor(private userRepository: UserRepository) {}
  async validate(
    value: any,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const existEmail = await this.userRepository.existEmail(value);
    return !existEmail;
  }
}

export const IsUniqueEmail = (options: ValidationOptions) => {
  return (obj: Object, property: string) => {
    registerDecorator({
      target: obj.constructor,
      propertyName: property,
      options,
      constraints: [],
      validator: EmailValidator,
    });
  };
};
