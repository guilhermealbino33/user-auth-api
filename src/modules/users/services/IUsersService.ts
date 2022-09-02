import { User } from '../../../entities/user';
import { ICreateUserDTO } from '../dtos/ICreateUserDTO';

export default interface IUsersService {
  createUser({ name, email, password }: ICreateUserDTO): Promise<void>;
  updateUser(userID: string): Promise<User>;
  deleteUser(userID: string): Promise<void>;
  findById(userId: string): Promise<User>;
  findByEmail(userId: string): Promise<User>;
}
