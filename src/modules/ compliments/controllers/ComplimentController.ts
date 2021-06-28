import { classToClass } from 'class-transformer';
import { Request, Response } from 'express';
import { CreateComplimentService } from '../services/CreateComplimentService';
import { ListComplimentFromReceiverService } from '../services/ListComplimentFromReceiverService';
import { ListComplimentFromSenderService } from '../services/ListComplimentFromSenderService';
import { ListComplimentService } from '../services/ListComplimentService';
import { ShowComplimentService } from '../services/ShowComplimentService';

class ComplimentController {
	public async getAll(req: Request, res: Response): Promise<Response> {
		const listCompliments = new ListComplimentService();

		const result = await listCompliments.execute();

		return res.status(result.code).json(classToClass(result));
	}

	public async getOne(req: Request, res: Response): Promise<Response> {
		const showCompliment = new ShowComplimentService();

		const { id } = req.params;

		const result = await showCompliment.execute(id);

		return res.status(result.code).json(classToClass(result));
	}

	public async getFromReceiver(
		req: Request,
		res: Response
	): Promise<Response> {
		const listComplimentFromReceiver =
			new ListComplimentFromReceiverService();

		const { receiver_id } = req.params;

		const result = await listComplimentFromReceiver.execute(receiver_id);

		return res.status(result.code).json(classToClass(result));
	}

	public async getFromSender(req: Request, res: Response): Promise<Response> {
		const listComplimentFromSender = new ListComplimentFromSenderService();

		const { sender_id } = req.params;

		const result = await listComplimentFromSender.execute(sender_id);

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
