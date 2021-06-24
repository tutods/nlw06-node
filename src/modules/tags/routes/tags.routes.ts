import { Router } from 'express';
import { havePermissions } from 'shared/middlewares/havePermissions';
import { isAuthenticated } from 'shared/middlewares/isAuthenticated';
import { joiBodyValidation } from 'shared/middlewares/joiValidation';
import { TagController } from '../controllers/TagController';
import { genericTagBody } from '../validations/TagSchema';

const controller = new TagController();

const tagRoutes = Router();

tagRoutes
	.use(isAuthenticated)
	.post(
		'/',
		[joiBodyValidation(genericTagBody), havePermissions],
		controller.create
	);

export { tagRoutes };
