import { User } from 'modules/users/entities/User';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
class UserRepository extends Repository<User> {
	public async findByEmail(email: string): Promise<User | undefined> {
		const user = await this.findOne({ email });
		return user;
	}
}

export { UserRepository };
