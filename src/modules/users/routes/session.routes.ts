import { Router } from 'express';
import { AuthController } from 'modules/users/controllers/AuthController';
import { joiBodyValidation } from 'shared/middlewares/joiValidation';
import { loginBody } from '../validations/SessionSchema';

const controller = new AuthController();

const sessionRoutes = Router();

sessionRoutes.post('/sign-in', joiBodyValidation(loginBody), controller.signIn);

export { sessionRoutes };
