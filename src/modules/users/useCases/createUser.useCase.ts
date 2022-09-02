import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';
import IUsersService from '../services/IUsersService';

@injectable()
export class CreateUserUseCase {
  constructor(@inject('UsersService') private usersService: IUsersService) {}

  async execute({ name, email, password }: ICreateUserDTO) {
    const userAlreadyExists = await this.usersService.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists!', 409);
    }

    const passwordHash = await hash(password, 8);

    return this.usersService.createUser({
      name,
      email,
      password: passwordHash,
    });
  }
}

// Testar e verificar porque ele está passando um user descontruído ao invés de um user
