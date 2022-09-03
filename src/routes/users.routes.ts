import { Router } from 'express';
import {
  createUserHandler,
  deleteUserHandler,
  showUserHandler,
  updateUserHandler,
} from '../modules/users/controllers/user.controller';

import { ensureAdmin } from '../shared/middlewares/ensureAdmin';

const usersRouter = Router();
usersRouter.post('/create', createUserHandler);
usersRouter.patch('/:id', updateUserHandler);
usersRouter.delete('/:id', deleteUserHandler);
usersRouter.get('/:id', showUserHandler);

export { usersRouter };
