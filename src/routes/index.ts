import { Request, Response, Router } from 'express';

const apiRoutes = Router();

apiRoutes.get('/', (req: Request, res: Response) => {
	res.status(200).json({
		status: 'Ok!'
	});
});

export default apiRoutes;
