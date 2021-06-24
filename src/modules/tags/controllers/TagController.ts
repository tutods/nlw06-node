import { Request, Response } from 'express';
import { CreateTagService } from '../services/CreateTagService';

class TagController {
	public async create(req: Request, res: Response): Promise<Response> {
		const createTag = new CreateTagService();
		const { name } = req.body;

		const result = await createTag.execute(name);

		return res.status(result.code).json(result);
	}
}

export { TagController };
