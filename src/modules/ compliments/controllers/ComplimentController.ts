import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';
import { ListComplimentService } from '../services/ListComplimentService';

class ComplimentController {
	public async getAll(req: Request, res: Response): Promise<Response> {
		const listCompliments = new ListComplimentService();

		const result = await listCompliments.execute();

		return res.status(result.code).json(classToClass(result));
	}

	public async create(req: Request, res: Response): Promise<Response> {
		const createCompliment = new CreateComplimentService();
		const { user_receiver, user_sender, tag_id, message } = req.body;

		const result = await createCompliment.execute({
			user_receiver,
			user_sender,
			tag_id,
			message
		});

		return res.status(result.code).json(result);
	}
}

export { ComplimentController };
