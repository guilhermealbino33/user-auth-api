import { Router } from 'express';
import {
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
} from '../modules/users/controllers/user.controller';

const usersRouter = Router();

usersRouter.post('/create', createUserHandler);
usersRouter.patch('/update', updateUserHandler);
usersRouter.post('/delete/:user_id', deleteUserHandler);
// usersRouter.get('/show/:id', showUserHandler);

export { usersRouter };
