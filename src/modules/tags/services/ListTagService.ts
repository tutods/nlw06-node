import { TagType } from '../types/Tag';
import { BaseTagService } from './BaseTagService';

type ResponseType = {
	code: number;
	count: number;
	tags: TagType[];
};

class ListTagService extends BaseTagService {
	async execute(): Promise<ResponseType> {
		const results = await this.repository.find();

		return {
			code: 200,
			count: results.length,
			tags: results
		};
	}
}

export { ListTagService };
