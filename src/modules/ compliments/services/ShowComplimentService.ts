import { ComplimentType } from '../types/Compliment';
import { BaseComplimentService } from './BaseComplimentService';

type ResponseType = {
	code: number;
	compliment: ComplimentType;
};

class ShowComplimentService extends BaseComplimentService {
	async execute(id: string): Promise<ResponseType> {
		const result = await this.repository.findOne(id, {
			relations: ['tag', 'userReceiver', 'userSender']
		});

		return {
			code: 200,
			compliment: result
		};
	}
}

export { ShowComplimentService };
