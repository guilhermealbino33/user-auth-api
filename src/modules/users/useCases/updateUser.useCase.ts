import { inject, injectable } from 'tsyringe';
import { IUser } from '../../../entities/user';
import { AppError } from '../../../shared/errors/AppError';
import IUsersService from '../services/IUsersService';

@injectable()
export class UpdateUserUseCase {
  constructor(@inject('UsersService') private usersService: IUsersService) {}

  async execute(user: IUser) {
    const userToUpdate = await this.usersService.findById(user.id);

    if (userToUpdate) {
      throw new AppError('User not found!', 404);
    }

    return this.usersService.updateUser(user);
  }
}
