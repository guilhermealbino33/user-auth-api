import { hash } from 'bcryptjs';
import { inject, injectable } from 'tsyringe';
import { IUser } from '../../../entities/user';
import { AppError } from '../../../shared/errors/AppError';
import { isValidId } from '../../../shared/utils/idValidator';
import { IUsersRepository } from '../repositories/IUsersRepository';

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository
  ) {}

  async execute(user: IUser) {
    if (!isValidId(user.id)) {
      throw new AppError('Invalid id!', 400);
    }

    const userToUpdate = await this.usersRepository.findById(user.id);

    if (!userToUpdate) {
      throw new AppError('User not found!', 404);
    }

    const password = await hash(user.password, 8);

    userToUpdate.name = user.name;
    userToUpdate.email = user.email;
    userToUpdate.password = password;
    userToUpdate.updated_at = new Date();

    return this.usersRepository.updateUser(userToUpdate);
  }
}
