import { NextFunction, Request, Response } from 'express';
import { AppError } from 'shared/errors/AppError';
import { JoiError } from 'shared/errors/JoiError';

const errorHandler = (
	error: AppError | Error,
	request: Request,
	response: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) => {
	// Error is instance of App Error
	if (error instanceof AppError) {
		return response.status(error.code).json({
			code: error.code,
			message: error.message
		});
	}

	// Error in Joi Validations
	if (error instanceof JoiError) {
		return response.status(error.code).json({
			code: error.code,
			errors: error.errors
		});
	}

	if (error instanceof Error) {
		return response.status(400).json({
			code: 400,
			message: error.message
		});
	}

	// In last case return internal server error
	return response.status(500).json({
		code: 500,
		message: 'Internal server error'
	});
};

export { errorHandler };
