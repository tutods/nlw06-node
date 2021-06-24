type ServerEnvType = {
	port: number;
};

type AuthEnvType = {
	salt: number;
	secret: string;
	expires: string;
	// emailToken: {
	// 	expires: number;
	// 	time: string;
	// };
};

export { ServerEnvType, AuthEnvType };
