import Joi from 'joi';
import { EValidationMessages } from 'shared/enums/EValidationMessages';

const genericTagBody = Joi.object({
	name: Joi.string()
		.required()
		.messages({
			'string.base': `Name ${EValidationMessages.STRING}`,
			'any.required': `Name ${EValidationMessages.REQUIRED}`
		})
});

export { genericTagBody };
