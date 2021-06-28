import { ComplimentType } from '../types/Compliment';
import { BaseComplimentService } from './BaseComplimentService';

type ResponseType = {
	code: number;
	count: number;
	compliments: ComplimentType[];
};

class ListComplimentFromReceiverService extends BaseComplimentService {
	async execute(receiver_id: string): Promise<ResponseType> {
		const results = await this.repository.find({
			where: {
				user_receiver: receiver_id
			},
			relations: ['tag', 'userReceiver', 'userSender']
		});

		return {
			code: 200,
			count: results.length,
			compliments: results
		};
	}
}

export { ListComplimentFromReceiverService };
