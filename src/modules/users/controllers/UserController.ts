import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { CreateUserService } from 'modules/users/services/CreateUserService';

class UserController {
	public async create(req: Request, res: Response): Promise<Response> {
		const createUser = new CreateUserService();
		const { name, email, isAdmin, password } = req.body;

		const result = await createUser.execute({
			name,
			email,
			password,
			isAdmin
		});

		return res.status(result.code).json(classToClass(result));
	}
}

export { UserController };
