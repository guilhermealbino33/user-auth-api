import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import IUsersService from '../services/IUsersService';

@injectable()
export class DeleteUserUseCase {
  constructor(@inject('UsersService') private usersService: IUsersService) {}

  async execute(userId: string) {
    const userToDelete = await this.usersService.findById(userId);

    if (userToDelete) {
      throw new AppError('User not found!', 404);
    }

    return this.usersService.deleteUser(userId);
  }
}
