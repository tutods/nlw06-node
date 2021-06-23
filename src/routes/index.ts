import { Request, Response, Router } from 'express';
import { userRoutes } from 'modules/users/routes';

const apiRoutes = Router();

apiRoutes
	// User Routes
	.use('/users', userRoutes)

	// API Status
	.get('/', (req: Request, res: Response) => {
		res.status(200).json({
			status: 'Ok!'
		});
	});

export { apiRoutes };
