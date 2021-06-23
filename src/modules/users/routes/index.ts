import { UserController } from 'modules/users/controllers/UserController';
import { Router } from 'express';

const controller = new UserController();

const userRoutes = Router();

userRoutes.post('/new', controller.create);

export { userRoutes };
