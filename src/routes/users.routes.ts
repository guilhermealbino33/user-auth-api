import { Router } from 'express';
import {
  createUserHandler,
  deleteUserHandler,
  updateUserHandler,
} from '../modules/users/controllers/user.controller';
import { ensureAdmin } from '../shared/middlewares/ensureAdmin';

const usersRouter = Router();
usersRouter.post('/create', createUserHandler);
usersRouter.patch('/update', updateUserHandler);
// usersRouter.post('/delete/:id', ensureAdmin, deleteUserHandler);
// usersRouter.get('/show/:id', showUserHandler);

export { usersRouter };
