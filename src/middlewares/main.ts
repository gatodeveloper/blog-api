import { Request, Response, NextFunction } from 'express';

export const mainMiddleware = (req: Request, res: Response, next: NextFunction) => {        
    next();
};
  