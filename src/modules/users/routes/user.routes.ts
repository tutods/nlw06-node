import { Router } from 'express';
import { UserController } from 'modules/users/controllers/UserController';
import { isAuthenticated } from 'shared/middlewares/isAuthenticated';
import {
	joiBodyValidation,
	joiParamsValidation
} from 'shared/middlewares/joiValidation';
import {
	genericUserBody,
	updateUserBody,
	userIdParam
} from '../validations/UserSchema';

const controller = new UserController();

const userRoutes = Router();

userRoutes
	// Create User
	.post('/', joiBodyValidation(genericUserBody), controller.create)

	// Update User
	.put(
		'/:id',
		[
			isAuthenticated,
			joiBodyValidation(updateUserBody),
			joiParamsValidation(userIdParam)
		],
		controller.update
	);

export { userRoutes };
