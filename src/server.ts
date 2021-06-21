import { serverEnv } from 'configs/envConfig';
import express from 'express';
import apiRoutes from 'routes';
import { loggingInfo } from 'utils/logging';
import cors from 'cors';

const app = express();

app
	// Set static folder
	.use('/public', express.static('./public'))

	// Cors
	.use(cors())

	//
	.use(express.urlencoded({ extended: true }))
	.use(express.json())

	// API Routes
	.use('/api', apiRoutes)

	// Set server port
	.listen(serverEnv.port, () => {
		loggingInfo(`Server start on port ${serverEnv.port} 🤟`);
	});
