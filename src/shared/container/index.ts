import { container } from 'tsyringe';

import '../providers';
import { IUsersRepository } from '../../modules/users/repositories/IUsersRepository';
import IUsersService from '../../modules/users/services/IUsersService';
import UsersService from '../../modules/users/services/implementations/users.service';
import UsersRepository from '../../modules/users/repositories/implementations/usersRepository';
import { IUsersTokensRepository } from '../../modules/users/repositories/IUsersTokensRepository';
import { UsersTokensRepository } from '../../modules/users/repositories/implementations/usersTokensRepository';

// Users
container.registerSingleton<IUsersService>('UsersService', UsersService);
container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository
);
container.registerSingleton<IUsersTokensRepository>(
  'UsersTokensRepository',
  UsersTokensRepository
);
