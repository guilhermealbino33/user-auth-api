import { inject, injectable } from 'tsyringe';
import IUsersService from '../services/IUsersService';

@injectable()
export class UpdateUserUseCase {
  constructor(@inject('UsersService') private usersService: IUsersService) {}

  async execute(userId: string) {
    return this.usersService.updateUser(userId);
  }
}
