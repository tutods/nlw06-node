import { User } from 'modules/users/entities/User';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(User)
class UserRepository extends Repository<User> {}

export { UserRepository };
