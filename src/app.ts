import cors from 'cors';
import express, { Application, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import notFound from './app/middlewares/not-found';
import { router } from './app/routes';
const app: Application = express();

app.use(cors());
app.use(express.json());

app.use('/api', router);

app.get('/', (req: Request, res: Response) => {
  res.send('Course Review application is loading...');
});

app.use(globalErrorHandler);
app.use(notFound);
export default app;
