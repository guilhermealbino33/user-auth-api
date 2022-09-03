import { IUser, User } from '../../../entities/user';

export default interface IUsersService {
  createUser(user: IUser): Promise<void>;
  updateUser(user: IUser): Promise<void>;
  deleteUser(userId: string): Promise<void>;
  findById(userId: string): Promise<User>;
  findByEmail(userId: string): Promise<User>;
}
