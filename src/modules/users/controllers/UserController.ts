import { Request, Response } from 'express';
import { CreateUserService } from 'modules/users/services/CreateUserService';

class UserController {
	public async create(req: Request, res: Response): Promise<Response> {
		const createUser = new CreateUserService();
		const { name, email, admin } = req.body;

		const result = await createUser.execute({
			name,
			email,
			admin
		});

		return res.status(result.code).json(result);
	}
}

export { UserController };
