import { inject, injectable } from 'tsyringe';
import IUsersService from '../services/IUsersService';

@injectable()
export class DeleteUserUseCase {
  constructor(@inject('UsersService') private usersService: IUsersService) {}

  async execute(userId: string) {
    return this.usersService.deleteUser(userId);
  }
}
