import { loggingError, loggingInfo } from 'shared/utils/logging';
import { createConnection } from 'typeorm';

const connect = async () => {
	try {
		await createConnection();
		loggingInfo('📀 Database connected with success!');
	} catch (err) {
		loggingError(`❌ Error connecting to database:\n ${err}`);
	}
};

// Run function
connect();
