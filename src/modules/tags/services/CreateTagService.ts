import { AppError } from 'shared/errors/AppError';
import { TagType } from '../types/Tag';
import { BaseTagService } from './BaseTagService';

type ResponseType = {
	code: number;
	message: string;
	tag: TagType;
};

class CreateTagService extends BaseTagService {
	async execute(name: string): Promise<ResponseType> {
		const alreadyExists = await this.repository.findOne({ name });

		if (alreadyExists) {
			throw new AppError('Tag already exists!');
		}

		const tag = this.repository.create({ name });

		try {
			await this.repository.save(tag);
		} catch (error) {
			throw new AppError(error.message);
		}

		return {
			code: 201,
			message: 'Tag created with success!',
			tag
		};
	}
}

export { CreateTagService };
