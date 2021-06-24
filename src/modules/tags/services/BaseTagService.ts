import { getCustomRepository } from 'typeorm';
import { TagRepository } from '../repositories/TagRepository';

class BaseTagService {
	protected repository = getCustomRepository(TagRepository);
}

export { BaseTagService };
