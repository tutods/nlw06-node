declare namespace Express {
	// eslint-disable-next-line @typescript-eslint/naming-convention
	export interface Request {
		user: {
			id: string;
			name: string;
			email: string;
			isAdmin?: boolean;
			created_at: string;
			update_at: string;
		};
	}
}
