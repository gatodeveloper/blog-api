import { Request, Response, Router } from 'express';
import { mainMiddleware } from '../middlewares/main';
import articlesRoutes from './article';

const router = Router();

router.get('/', (req: Request, res: Response) => {res.status(200).send('Healthy OK')});
router.use('/api/v1/articles', mainMiddleware, articlesRoutes);

export default router;

