import { Router } from 'express';
import { UserController } from 'modules/users/controllers/UserController';
import { joiBodyValidation } from 'shared/middlewares/joiValidation';
import { genericUserBody } from '../validations/UserSchema';

const controller = new UserController();

const userRoutes = Router();

userRoutes.post('/', joiBodyValidation(genericUserBody), controller.create);

export { userRoutes };
