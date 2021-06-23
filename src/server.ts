import { serverEnv } from 'configs/envConfig';
import cors from 'cors';
import 'database';
import express, { Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import { apiRoutes } from 'routes';
import { errorHandler } from 'shared/middlewares/ErrorHandler';
import { loggingInfo } from 'shared/utils/logging';

const app = express();

app
	// Set static folder
	.use('/public', express.static('./public'))

	// Cors
	.use(cors())

	//
	.use(express.json())

	// API Routes
	.use('/api', apiRoutes)

	// 404 - Not Found route
	.use((req: Request, res: Response) => {
		const url = req.url;

		return res.status(404).json({
			code: 404,
			message: `The ${url} not found!`
		});
	}) // ==> 404 Not Found Route

	// Middleware to Error Handler
	.use(errorHandler)

	// Set server port
	.listen(serverEnv.port, () => {
		loggingInfo(`🤟 Server is running on port ${serverEnv.port}`);
	});
