import Joi from 'joi';
import { EValidationMessages } from 'shared/enums/EValidationMessages';

const genericComplimentBody = Joi.object({
	tag_id: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `Tag id ${EValidationMessages.STRING}`,
			'string.guid': `Tag id ${EValidationMessages.UUID}`,
			'any.required': `Tag id ${EValidationMessages.REQUIRED}`
		}),
	user_sender: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `User sender id ${EValidationMessages.STRING}`,
			'string.guid': `User sender id ${EValidationMessages.UUID}`,
			'any.required': `User sender id ${EValidationMessages.REQUIRED}`
		}),
	user_receiver: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `User receiver id ${EValidationMessages.STRING}`,
			'string.guid': `User receiver id ${EValidationMessages.UUID}`,
			'any.required': `User receiver id ${EValidationMessages.REQUIRED}`
		}),
	message: Joi.string()
		.required()
		.messages({
			'string.base': `Message ${EValidationMessages.STRING}`,
			'any.required': `Message ${EValidationMessages.REQUIRED}`
		})
});

export { genericComplimentBody };
