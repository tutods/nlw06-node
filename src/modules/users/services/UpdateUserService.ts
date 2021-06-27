import { hash } from 'bcryptjs';
import { authEnv } from 'configs/envConfig';
import { AppError } from 'shared/errors/AppError';
import { UserType } from '../types/User';
import { BaseUserService } from './BaseUserService';

type ResponseType = {
	code: number;
	message: string;
	user: UserType;
};

class UpdateUserService extends BaseUserService {
	async execute({
		id,
		name,
		email,
		password,
		isAdmin
	}: UserType): Promise<ResponseType> {
		const user = await this.repository.findOne(id);

		if (!user) {
			throw new AppError('User not found!', 404);
		}

		const userExists = await this.repository.findOne({ email });

		if (userExists) {
			throw new AppError('User already exists!');
		}

		// user.name = name;
		// user.email = email;
		// user.password = await hash(password, authEnv.salt);
		// user.isAdmin = isAdmin;

		try {
			await this.repository.update(user, {
				name,
				email,
				password: await hash(password, authEnv.salt),
				isAdmin
			});
		} catch (err) {
			throw new AppError(err.message, 400);
		}

		return {
			code: 201,
			message: 'User update with success!',
			user
		};
	}
}

export { UpdateUserService };
