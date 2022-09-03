import { inject } from 'tsyringe';
import { IUsersRepository } from '../../repositories/IUsersRepository';
import IUsersService from '../IUsersService';
import { IUser, User } from '../../../../entities/user';

export default class UsersService implements IUsersService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository
  ) {}

  async createUser(user: IUser): Promise<void> {
    await this.usersRepository.create(user);
  }

  async updateUser(user: IUser): Promise<void> {
    await this.usersRepository.updateUser(user);
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
