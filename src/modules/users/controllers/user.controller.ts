import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { ProfileMap } from '../mappers/ProfileMap';
import { CreateUserUseCase } from '../useCases/createUser.useCase';
import { DeleteUserUseCase } from '../useCases/deleteUser.useCase';
import { UpdateUserUseCase } from '../useCases/updateUser.useCase';

// CONFERIR O TIPO DE RETORNO

export async function createUserHandler(request: Request, response: Response) {
  const { name, email, password } = request.body;
  const createUserUseCase = container.resolve(CreateUserUseCase);
  const user = await createUserUseCase.execute({
    name,
    email,
    password,
  });

  return response.status(201).json(user);
}

export async function updateUserHandler(request: Request, response: Response) {
  const userId = request.params;

  const { name, email, password } = request.body;

  const updateUserUseCase = container.resolve(UpdateUserUseCase);
  const user = await updateUserUseCase.execute(
    String(userId),
    name,
    email,
    password
  );

  return response.status(201).json(user);
}

export async function deleteUserHandler(request: Request, response: Response) {
  const userId = request.body; // avaliar se é melhor params ou body
  const deleteUserUseCase = container.resolve(DeleteUserUseCase);
  const user = await deleteUserUseCase.execute(userId);

  return response.status(201).json(user);
}

// export async function showUserHandler(request: Request, response: Response) {
//   const userId = request.params;
//   const showUserProfile = container.resolve(ShowUserProfileUseCase);
//   const user = await showUserProfile.execute(userId);
//   const profileDTO = ProfileMap.toDTO(user);

//   return response.json(profileDTO);
// }
