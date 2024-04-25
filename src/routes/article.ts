import { Router } from 'express';
import { getArticles, postArticle, getArticle } from '../controllers/article';

const router: Router = Router();

router.get('/', getArticles);
router.post('/', postArticle);
router.get('/:slug', getArticle);


export default router;
