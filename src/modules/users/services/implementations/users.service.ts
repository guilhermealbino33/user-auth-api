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

  async createUser({ name, email, password }: ICreateUserDTO): Promise<User> {
    const user = await this.usersRepository.create({
      email,
      name,
      password,
    });

    return user;
  }

  updateUser(userID: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  deleteUser(userID: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findById(userId: string): Promise<User> {
    return this.usersRepository.findById(userId);
  }

  async findByEmail(userId: string): Promise<User> {
    return this.usersRepository.findById(userId);
  }
}
