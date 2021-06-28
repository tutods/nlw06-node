import Joi from 'joi';
import { EValidationMessages } from 'shared/enums/EValidationMessages';

const complimentIdParam = Joi.object({
	id: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `Id ${EValidationMessages.STRING}`,
			'string.guid': `Id ${EValidationMessages.UUID}`,
			'any.required': `Id ${EValidationMessages.REQUIRED}`
		})
});

const complimentUserReceiverIdParam = Joi.object({
	receiver_id: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `Id ${EValidationMessages.STRING}`,
			'string.guid': `Id ${EValidationMessages.UUID}`,
			'any.required': `Id ${EValidationMessages.REQUIRED}`
		})
});

const complimentUserSenderIdParam = Joi.object({
	sender_id: Joi.string()
		.guid()
		.required()
		.messages({
			'string.base': `Id ${EValidationMessages.STRING}`,
			'string.guid': `Id ${EValidationMessages.UUID}`,
			'any.required': `Id ${EValidationMessages.REQUIRED}`
		})
});

export {
	complimentIdParam,
	complimentUserReceiverIdParam,
	complimentUserSenderIdParam
};
