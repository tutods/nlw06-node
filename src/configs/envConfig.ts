import 'dotenv/config';
import { AuthEnvType, ServerEnvType } from 'shared/types/EnvConfig';

const { PORT, SALT, SECRET, EXPIRES } = process.env;

const serverEnv: ServerEnvType = {
	port: Number(PORT) || 3333
};

export const authEnv: AuthEnvType = {
	salt: Number(SALT) || 10,
	secret: SECRET || '',
	expires: EXPIRES || '1h'
	// emailToken: {
	// 	expires: getTime(EMAIL_EXPIRES || '30m'),
	// 	time: getTypeOfTime(EMAIL_EXPIRES || '30m')
	// }
};

export { serverEnv };
