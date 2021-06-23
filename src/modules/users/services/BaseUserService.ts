import { UserRepository } from 'modules/users/repositories/UserRepository';
import { getCustomRepository } from 'typeorm';

class BaseUserService {
	protected repository = getCustomRepository(UserRepository);
}

export { BaseUserService };
