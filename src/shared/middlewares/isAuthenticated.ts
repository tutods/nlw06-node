import { authEnv } from 'configs/envConfig';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { AppError } from 'shared/errors/AppError';
import { TokenPlayloadType } from 'shared/types/TokenPlayload';

export const isAuthenticated = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const authHeader = req.headers.authorization;

	if (!authHeader) {
		throw new AppError('Your token is invalid.', 401);
	}

	const [, token] = authHeader.split(' '); // get only token (ex.: Bearer <token>)

	if (!token) {
		throw new AppError('Your token is invalid.', 401);
	}

	try {
		const decodeToken = verify(token, authEnv.secret) as TokenPlayloadType;

		const { exp, sub, user } = decodeToken;

		if (Date.now() >= exp * 1000) {
			throw new AppError('Your token already expire!', 401);
		}

		req.user = {
			id: sub,
			name: user.name,
			email: user.email,
			isAdmin: user.isAdmin || false,
			created_at: user.created_at,
			update_at: user.update_at
		};

		next();
	} catch (error) {
		throw new AppError('Your token is invalid.', 401);
	}
};
