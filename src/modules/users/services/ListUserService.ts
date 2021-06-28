import { UserType } from '../types/User';
import { BaseUserService } from './BaseUserService';

type ResponseType = {
	code: number;
	count: number;
	tags: UserType[];
};

class ListUserService extends BaseUserService {
	async execute(): Promise<ResponseType> {
		const results = await this.repository.find();

		return {
			code: 200,
			count: results.length,
			tags: results
		};
	}
}

export { ListUserService };
