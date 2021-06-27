import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { CreateUserService } from 'modules/users/services/CreateUserService';
import { UpdateUserService } from '../services/UpdateUserService';

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

	public async update(req: Request, res: Response): Promise<Response> {
		const updateUser = new UpdateUserService();

		const { name, email, isAdmin, password } = req.body;
		const { id } = req.params;

		const result = await updateUser.execute({
			id,
			name,
			email,
			isAdmin,
			password
		});

		// Remove User on request
		req.user = undefined;
		console.log(req.user);

		return res.status(result.code).json(classToClass(result));
	}
}

export { UserController };
