import { NextFunction, Request, Response } from 'express';
import { AppError } from 'shared/errors/AppError';

const errorHandler = (
	error: AppError | Error,
	request: Request,
	response: Response,
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	next: NextFunction
) => {
	// Error is instance of App Error
	if (error instanceof AppError) {
		console.log('Entrou AQUI');

		return response.status(error.code).json({
			status: error.code,
			message: error.message
		});
	}

	// Error in Joi Validations
	// if (error instanceof JoiError) {
	// 	return response.status(error.code).json({
	// 		status: error.code,
	// 		errors: error.errors
	// 	});
	// }

	if (error instanceof Error) {
		return response.status(400).json({
			message: error.message
		});
	}

	// In last case return internal server error
	return response.status(500).json({
		status: 500,
		message: 'Internal server error'
	});
};

export { errorHandler };
