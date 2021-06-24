import { NextFunction, Request, Response } from 'express';
import { AppError } from 'shared/errors/AppError';

export const havePermissions = (
	req: Request,
	res: Response,
	next: NextFunction
): void => {
	const { isAdmin } = req.user;

	if (!isAdmin || !req.user) {
		throw new AppError(
			'You not have necessary permissions to execute this action.',
			403
		);
	}

	next();
};
