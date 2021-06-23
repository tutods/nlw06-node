import { BaseUserService } from './BaseUserService';

type UserType = {
	name: string;
	email: string;
	admin?: boolean;
};

type ResponseType = {
	code: number;
	message: string;
	user: UserType;
};

class CreateUserService extends BaseUserService {
	async execute({ name, email, admin }: UserType): Promise<ResponseType> {
		const userExists = await this.repository.findOne({ email });

		if (userExists) {
			throw new Error(`User already exists!`);
		}

		const user = this.repository.create({ name, email, admin });

		await this.repository.save(user);

		return {
			code: 201,
			message: 'User created with sucess!',
			user
		};
	}
}

export { CreateUserService };
