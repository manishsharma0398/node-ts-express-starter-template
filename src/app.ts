import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import express, { Express } from 'express';

// middlewares
import morganMiddleware from 'middlewares/morgan';

// routes
import v1Apis from 'apis/v1';
import homePage from 'apis';
import notFound from 'apis/404';
import serverConfig from 'utils/constants';

const app: Express = express();

app.set('trust proxy', true);
app.use(morganMiddleware);
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(serverConfig.ROOT_DIR, 'public')));

app.get('/', homePage);
app.use('/api/v1', v1Apis);
app.use('*', notFound);

export default app;
