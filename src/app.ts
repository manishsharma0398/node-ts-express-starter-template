import cors from 'cors';
import helmet from 'helmet';
import express, { Request, Response, Express } from 'express';

// middlewares
import morganMiddleware from 'middlewares/morgan';

// routes
import v1Apis from 'apis/v1';

const app: Express = express();

app.set('trust proxy', true);
app.use(morganMiddleware);
app.use(helmet());
app.use(cors());
app.use(express.json());

app.get('/', (req: Request, res: Response) => {
  return res.status(200).json({ message: 'Home Page' });
});

app.use('/api/v1', v1Apis);

export default app;
