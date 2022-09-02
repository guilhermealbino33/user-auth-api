import { AppError } from '../../../shared/errors/AppError';
import UsersRepositoryInMemory from '../repositories/in-memory/usersRepositoryInMemory';
import UsersService from '../services/implementations/users.service';
import { CreateUserUseCase } from './createUser.useCase';

let createUserUseCase: CreateUserUseCase;
let usersService: UsersService;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe('Create User', () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    usersService = new UsersService(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersService);
  });

  it('Should be able to create a new user', async () => {
    await createUserUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '12346',
    });

    const numOfUsers = usersRepositoryInMemory.users.length;

    expect(numOfUsers).toBe(1);
    expect(usersRepositoryInMemory.users[0]).toHaveProperty('id');
  });

  it('Should not to be able to create an user with existent e-mail', async () => {
    await createUserUseCase.execute({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password: '12346',
    });

    await expect(
      createUserUseCase.execute({
        name: 'Jane Doe',
        email: 'johndoe@mail.com',
        password: '12346',
      })
    ).rejects.toEqual(new AppError('User already exists!', 409));
  });
});
