import { Router } from 'express';
import { isAuthenticated } from 'shared/middlewares/isAuthenticated';
import {
	joiBodyValidation,
	joiParamsValidation
} from 'shared/middlewares/joiValidation';
import { ComplimentController } from '../controllers/ComplimentController';
import { genericComplimentBody } from '../validations/ComplimentSchema';
import {
	complimentIdParam,
	complimentUserReceiverIdParam,
	complimentUserSenderIdParam
} from '../validations/IdSchema';

const controller = new ComplimentController();

const complimentRoutes = Router();

complimentRoutes
	// Auth Middleware
	.use(isAuthenticated)

	// List Compliments
	.get('/', controller.getAll)

	// Show Compliment
	.get('/:id', joiParamsValidation(complimentIdParam), controller.getOne)

	// Show Compliments from specific receiver
	.get(
		'/receiver/:receiver_id',
		joiParamsValidation(complimentUserReceiverIdParam),
		controller.getFromReceiver
	)

	// Show Compliments from specific sender
	.get(
		'/sender/:receiver_id',
		joiParamsValidation(complimentUserSenderIdParam),
		controller.getFromSender
	)

	// Create Compliment
	.post('/', joiBodyValidation(genericComplimentBody), controller.create);

export { complimentRoutes };
