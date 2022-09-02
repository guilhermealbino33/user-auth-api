import { inject } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import IUsersService from '../IUsersService';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { User } from '../../../../entities/user';

export default class UsersService implements IUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async createUser({ name, email, password }: ICreateUserDTO): Promise<void> {
    await this.usersRepository.create({
      email,
      name,
      password,
    });
  }

  async updateUser(
    userId: string,
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    await this.usersRepository.updateUser(userId, name, email, password);
  }

  async deleteUser(userId: string): Promise<void> {
    this.usersRepository.deleteUser(userId);
  }

  async findById(userId: string): Promise<User> {
    return this.usersRepository.findById(userId);
  }

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findByEmail(email);
  }
}
