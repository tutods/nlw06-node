import { Router } from 'express';
import { UserController } from 'modules/users/controllers/UserController';
import { havePermissions } from 'shared/middlewares/havePermissions';
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

	// List Users
	.get('/', havePermissions, controller.getAll)

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
