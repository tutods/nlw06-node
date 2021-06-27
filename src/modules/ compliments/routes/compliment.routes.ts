import { Router } from 'express';
import { havePermissions } from 'shared/middlewares/havePermissions';
import { isAuthenticated } from 'shared/middlewares/isAuthenticated';
import { joiBodyValidation } from 'shared/middlewares/joiValidation';
import { ComplimentController } from '../controllers/ComplimentController';
import { genericComplimentBody } from '../validations/ComplimentSchema';

const controller = new ComplimentController();

const complimentRoutes = Router();

complimentRoutes
	// Auth Middleware
	.use(isAuthenticated)

	// List Compliments
	.get('/', havePermissions, controller.getAll)

	// Create Compliment
	.post('/', joiBodyValidation(genericComplimentBody), controller.create);

export { complimentRoutes };
