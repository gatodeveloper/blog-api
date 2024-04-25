import { Request, Response, Router, NextFunction } from 'express';

const router = Router();

const error404 = (req: Request, res: Response, next: NextFunction) => {
    const error = new Error('Not Found');
    res.status(404).json({ message: error.message });
  };

const error500 = (err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
}

router.use(error404);
router.use(error500);

export default router;
