import { UserRepository } from 'modules/users/repositories/UserRepository';
import { getCustomRepository } from 'typeorm';
import { ComplimentRepository } from '../repositories/ComplimentRepository';

class BaseComplimentService {
	protected repository = getCustomRepository(ComplimentRepository);
	protected userRepository = getCustomRepository(UserRepository);
}

export { BaseComplimentService };
