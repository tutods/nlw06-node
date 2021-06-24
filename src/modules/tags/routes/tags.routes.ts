import { Router } from 'express';
import { isAuthenticated } from 'shared/middlewares/isAuthenticated';
import { TagController } from '../controllers/TagController';

const controller = new TagController();

const tagRoutes = Router();

tagRoutes.use(isAuthenticated).post('/', controller.create);

export { tagRoutes };
