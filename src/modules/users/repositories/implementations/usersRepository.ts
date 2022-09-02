import { getRepository, Repository } from 'typeorm';
import { User } from '../../../../entities/user';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ name, email, password });

    this.repository.save(user);
  }

  async updateUser(
    userId: string,
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    this.repository.save({ id: userId, name, email, password });
  }

  deleteUser(userID: string): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne(email);
  }

  async findById(user_id: string): Promise<User> {
    return this.repository.findOne(user_id);
  }
}
