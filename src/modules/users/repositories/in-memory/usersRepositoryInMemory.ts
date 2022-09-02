import { User } from '../../../../entities/user';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUsersRepository } from '../IUsersRepository';

export default class UsersRepositoryInMemory implements IUsersRepository {
  users: User[];

  constructor() {
    this.users = [];
  }

  async create({ name, email, password }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      email,
      password,
    });

    this.users.push(user);
  }
  async updateUser(
    userId: string,
    name: string,
    email: string,
    password: string
  ): Promise<void> {
    // TODO
    throw new Error('Method not implemented.');
  }
  deleteUser(userID: string): Promise<void> {
    // TODO
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email) as User;
  }
  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id) as User;
  }
}
