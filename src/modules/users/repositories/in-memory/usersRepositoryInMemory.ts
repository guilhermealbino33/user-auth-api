import { User } from '../../../../entities/user';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

export default class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create(data: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      data,
    });
    this.users.push(user);
  }
  updateUser(userID: string): Promise<User> {
    // TODO
    throw new Error('Method not implemented.');
  }
  deleteUser(userID: string): Promise<void> {
    // TODO
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }
}
