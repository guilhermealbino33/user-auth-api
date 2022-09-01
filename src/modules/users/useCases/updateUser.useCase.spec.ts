import { AppError } from '../../../shared/errors/AppError';
import UsersRepositoryInMemory from '../repositories/in-memory/usersRepositoryInMemory';
import UsersService from '../services/implementations/users.service';
import { CreateUserUseCase } from './createUser.useCase';

let createUserUseCase: CreateUserUseCase;
let usersService: UsersService;
let usersRepositoryInMemory: UsersRepositoryInMemory;

// TODO

describe('Update User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersService = new UsersService(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersService);
  });
  it('should be able to update users information', async () => {
    const user = await createUserUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '12346',
    });

    expect(user).toHaveProperty('id');
  });
});
