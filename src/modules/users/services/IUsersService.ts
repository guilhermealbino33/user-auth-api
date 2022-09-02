import { User } from '../../../entities/user';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export default interface IUsersService {
  createUser({ name, email, password }: ICreateUserDTO): Promise<void>;
  updateUser(
    userId: string,
    name: string,
    email: string,
    password: string
  ): Promise<void>;
  deleteUser(userID: string): Promise<void>;
  findById(userId: string): Promise<User | undefined>;
  findByEmail(userId: string): Promise<User | undefined>;
}
