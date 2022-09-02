import { Repository } from 'typeorm';
import { AppDataSource } from '../../../../data-source';
import { User } from '../../../../entities/user';

import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

export default class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = AppDataSource.getRepository(User);
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

  async deleteUser(userID: string): Promise<void> {
    this.repository.delete(userID);
  }

  async findByEmail(email: string): Promise<User> {
    return this.repository.findOne({
      where: [
        {
          email,
        },
      ],
    });
  }

  async findById(user_id: string): Promise<User> {
    return this.repository.findOne({
      where: [
        {
          id: user_id,
        },
      ],
    });
  }
}
