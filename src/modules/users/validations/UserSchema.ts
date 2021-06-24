import Joi from 'joi';
import { EValidationMessages } from 'shared/enums/EValidationMessages';

const genericUserBody = Joi.object({
	name: Joi.string()
		.required()
		.messages({
			'string.base': `Name ${EValidationMessages.STRING}`,
			'any.required': `Name ${EValidationMessages.REQUIRED}`
		}),
	email: Joi.string()
		.email()
		.required()
		.messages({
			'string.base': `Email ${EValidationMessages.STRING}`,
			'string.email': EValidationMessages.EMAIL,
			'any.required': `Email ${EValidationMessages.REQUIRED}`
		}),
	password: Joi.string()
		.required()
		.messages({
			'string.base': `Password ${EValidationMessages.STRING}`,
			'any.required': `Password ${EValidationMessages.REQUIRED}`
		}),
	isAdmin: Joi.boolean().messages({
		'boolean.base': `Field 'isAdmin' ${EValidationMessages.BOOLEAN}`
	})
});

export { genericUserBody };
