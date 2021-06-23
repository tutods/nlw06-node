import { AppError } from 'shared/errors/AppError';
import { UserType } from '../types/User';
import { BaseUserService } from './BaseUserService';

type ResponseType = {
	code: number;
	message: string;
	user: UserType;
};

class CreateUserService extends BaseUserService {
	async execute({ name, email, admin }: UserType): Promise<ResponseType> {
		const userExists = await this.repository.findOne({ email });

		if (userExists) {
			throw new AppError('User already exists!');
		}

		const user = this.repository.create({ name, email, admin });

		try {
			await this.repository.save(user);
		} catch (err) {
			throw new AppError(err.message, 400);
		}

		return {
			code: 201,
			message: 'User created with sucess!',
			user
		};
	}
}

export { CreateUserService };
