import { Request, Response, Router } from 'express';
import { complimentRoutes } from 'modules/ compliments/routes/compliment.routes';
import { tagRoutes } from 'modules/tags/routes/tag.routes';
import { sessionRoutes } from 'modules/users/routes/session.routes';
import { userRoutes } from 'modules/users/routes/user.routes';

const apiRoutes = Router();

apiRoutes
	// Session routes
	.use('/', sessionRoutes)

	// User Routes
	.use('/users', userRoutes)

	// Tag Routes
	.use('/tags', tagRoutes)

	// Compliments Routes
	.use('/compliments', complimentRoutes)

	// API Status
	.get('/', (req: Request, res: Response) => {
		res.status(200).json({
			status: 'Ok!'
		});
	});

export { apiRoutes };
