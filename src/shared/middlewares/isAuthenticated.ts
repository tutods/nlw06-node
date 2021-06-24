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
		throw new AppError('Cannot find any token in your headers', 401);
	}

	const [, token] = authHeader.split(' '); // get only token (ex.: Bearer <token>)

	try {
		const decodeToken = verify(token, authEnv.secret) as TokenPlayloadType;

		const { exp, sub, name, email, isAdmin, created_at, update_at } =
			decodeToken;

		if (Date.now() >= exp * 1000) {
			throw new AppError('Your token already expire!');
		}

		req.user = {
			id: sub,
			name,
			email,
			isAdmin,
			created_at,
			update_at
		};

		next();
	} catch (error) {
		throw new AppError('Your token is invalid.', 401);
	}
};
