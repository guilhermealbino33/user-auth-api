import { inject, injectable } from 'tsyringe';
import { AppError } from '../../../shared/errors/AppError';
import IUsersService from '../services/IUsersService';

@injectable()
export class UpdateUserUseCase {
  constructor(@inject('UsersService') private usersService: IUsersService) {}

  async execute(userId: string, name: string, email: string, password: string) {
    const userToUpdate = await this.usersService.findById(userId);

    if (userToUpdate) {
      throw new AppError('User not found!', 404);
    }

    return this.usersService.updateUser(userId, name, email, password);
  }
}
