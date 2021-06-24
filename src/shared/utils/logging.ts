const loggingInfo = (message: string): void => {
	console.log(`\x1b[34m[${getTimeStamp()}] ${message}\x1B[37m`);
};

const logging = (message: string): void => {
	console.log(`[${getTimeStamp()}] ${message}`);
};

const loggingWarn = (message: string): void => {
	console.log(`\x1b[33m[${getTimeStamp()}] ${message}\x1B[37m`);
};

const loggingError = (message: string): void => {
	console.log(
		`\x1b[31m[${getTimeStamp()}] \x1B[1m[ERROR]\x1B[0m\x1b[31m ${message}\x1B[37m`
	);
};

const loggingDebug = (message: string): void => {
	console.log(
		`\x1b[35m[${getTimeStamp()}] \x1B[1m[DEBUG]\x1B[0mx1b[35m ${message}\x1B[37m`
	);
};

const getTimeStamp = (): string => {
	const date = new Date();

	const day = String(date.getDate()).padStart(2, '0');
	const month = String(date.getMonth() + 1).padStart(2, '0');
	const hour = String(date.getHours()).padStart(2, '0');
	const minutes = String(date.getMinutes()).padStart(2, '0');
	const seconds = String(date.getSeconds()).padStart(2, '0');

	const dateString = `${day}/${month}/${date.getFullYear()} ${hour}:${minutes}:${seconds}`;

	return dateString;
};

export { loggingInfo, logging, loggingWarn, loggingError, loggingDebug };
