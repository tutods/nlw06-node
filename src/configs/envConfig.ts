import 'dotenv/config';
import { ServerEnvType } from 'types/EnvConfig';

const { PORT } = process.env;

const serverEnv: ServerEnvType = {
	port: Number(PORT) || 3333
};

export { serverEnv };
