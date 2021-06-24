import { Request, Response, Router } from 'express';
import { tagRoutes } from 'modules/tags/routes/tags.routes';
import { sessionRoutes } from 'modules/users/routes/session.routes';
import { userRoutes } from 'modules/users/routes/users.routes';

const apiRoutes = Router();

apiRoutes
	// Session routes
	.use('/', sessionRoutes)

	// User Routes
	.use('/users', userRoutes)

	// Tag Routes
	.use('/tags', tagRoutes)

	// API Status
	.get('/', (req: Request, res: Response) => {
		res.status(200).json({
			status: 'Ok!'
		});
	});

export { apiRoutes };
