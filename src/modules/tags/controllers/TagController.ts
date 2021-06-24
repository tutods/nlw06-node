import { Request, Response } from 'express';
import { CreateTagService } from '../services/CreateTagService';
import { ListTagService } from '../services/ListTagService';

class TagController {
	public async index(req: Request, res: Response): Promise<Response> {
		const service = new ListTagService();

		const result = await service.execute();

		return res.status(result.code).json(result);
	}

	public async create(req: Request, res: Response): Promise<Response> {
		const createTag = new CreateTagService();
		const { name } = req.body;

		const result = await createTag.execute(name);

		return res.status(result.code).json(result);
	}
}

export { TagController };
