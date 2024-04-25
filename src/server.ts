import express, { Application } from 'express';
import dotenv from 'dotenv'
import cors from 'cors'
import apiRoutes from './routes';
import { mainMiddleware } from './middlewares/main';
import handleErrors  from './routes/errors';
import { configInit } from './config';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string);
const app: Application = express();

configInit();

app.use(cors());
app.use(express.json());
app.use('/', mainMiddleware, apiRoutes);
app.use(handleErrors);

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
