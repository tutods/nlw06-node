import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { CreateSessionService } from '../services/CreateSessionService';

class AuthController {
	public async signIn(req: Request, res: Response): Promise<Response> {
		const { email, password } = req.body;
		const service = new CreateSessionService();

		const result = await service.execute({ email, password });

		return res.status(result.code).json(classToClass(result));
	}
}

export { AuthController };
