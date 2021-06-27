import { loggingError, loggingInfo } from 'shared/utils/logging';
import { createConnection } from 'typeorm';

createConnection()
	.then(() => {
		loggingInfo('📀 Database connected with success!');
	})
	.catch((err) => {
		loggingError(`❌ Error connecting to database:\n ${err}`);
	});
