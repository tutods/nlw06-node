import { EntityRepository, Repository } from 'typeorm';
import { Tag } from '../entities/Tag';

@EntityRepository(Tag)
class TagRepository extends Repository<Tag> {
	public async findByName(name: string): Promise<Tag | undefined> {
		const tag = await this.findOne({ name });
		return tag;
	}

	public async findById(id: string): Promise<Tag | undefined> {
		const tag = await this.findOne({ id });
		return tag;
	}
}

export { TagRepository };
