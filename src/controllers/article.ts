import { Request, Response } from 'express';
import Article, { IArticle } from '../models/article';


export const getArticles = async (req: Request, res: Response): Promise<void> => {
  try {
    const sites: IArticle[] = await Article.find();
    res.json(sites);
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
};

export const postArticle = async (req: Request, res: Response): Promise<void> => {
  const payload : IArticle = req.body;  
  
  try {
    const newArticle = await Article.create(payload);      
    res.status(201).json(newArticle);
  } catch (err:any) {
    res.status(400).json({ message: err.message });
  }
};

export const getArticle = async (req: Request, res: Response): Promise<void> => {
  const slug : string  = req.params.slug; 
  try {
    const articles: IArticle[] | null = await Article.findOne({slug: slug});
    res.json(articles);
  } catch (err:any) {
    res.status(500).json({ message: err.message });
  }
};

