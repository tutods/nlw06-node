import { AppError } from 'shared/errors/AppError';
import { Compliment } from '../entities/Compliment';
import { ComplimentType } from '../types/Compliment';
import { BaseComplimentService } from './BaseComplimentService';

type ResponseType = {
	code: number;
	message: string;
	compliment: Compliment;
};

class CreateComplimentService extends BaseComplimentService {
	async execute({
		user_sender,
		user_receiver,
		tag_id,
		message
	}: ComplimentType): Promise<ResponseType> {
		if (user_sender === user_receiver) {
			throw new AppError(
				'Is not possible register an compliment to yourself!'
			);
		}

		const userSenderValid = await this.userRepository.find({
			id: user_sender
		});

		if (!userSenderValid) {
			throw new AppError('User sender is invalid');
		}

		const userReceiverValid = await this.userRepository.find({
			id: user_receiver
		});

		if (!userReceiverValid) {
			throw new AppError('User receiver is invalid');
		}

		const compliment = this.repository.create({
			user_sender,
			user_receiver,
			tag_id,
			message
		});

		try {
			await this.repository.save(compliment);
		} catch (err) {
			throw new AppError(err.message);
		}

		return {
			code: 201,
			message: 'User created with success!',
			compliment
		};
	}
}

export { CreateComplimentService };
