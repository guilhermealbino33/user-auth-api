import { User } from '../../../entities/user';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export interface IUsersRepository {
  create(data: ICreateUserDTO): Promise<void>;
  updateUser(
    userId: string,
    name: string,
    email: string,
    password: string
  ): Promise<void>;
  deleteUser(userID: string): Promise<void>;
  findByEmail(email: string): Promise<User | undefined>;
  findById(user_id: string): Promise<User | undefined>;
}
