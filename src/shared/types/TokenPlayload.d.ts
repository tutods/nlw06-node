type TokenPlayloadType = {
	name: string;
	email: string;
	isAdmin?: boolean;
	created_at: string;
	update_at: string;
	iat: number;
	exp: number;
	sub: string;
};

export { TokenPlayloadType };
