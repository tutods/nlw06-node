import { ComplimentType } from '../types/Compliment';
import { BaseComplimentService } from './BaseComplimentService';

type ResponseType = {
	code: number;
	count: number;
	compliments: ComplimentType[];
};

class ListComplimentService extends BaseComplimentService {
	async execute(): Promise<ResponseType> {
		const results = await this.repository.find({
			relations: ['tag', 'userReceiver', 'userSender']
		});

		return {
			code: 200,
			count: results.length,
			compliments: results
		};
	}
}

export { ListComplimentService };
