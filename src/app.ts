import cors from 'cors';
import path from 'path';
import helmet from 'helmet';
import express, { Express } from 'express';

// middlewares
import morganMiddleware from 'middlewares/morgan';

// routes
import homePage from 'apis';
import v1Apis from 'apis/v1';
import notFound from 'apis/404';

// utils
import serverConfig from 'utils/constants';

// configs
import corsOptions from 'configs/corsOptions';

const app: Express = express();

app.set('trust proxy', true);
app.use(morganMiddleware);
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(serverConfig.ROOT_DIR, 'public')));

app.get('/', homePage);
app.use('/api/v1', v1Apis);
app.use('*', notFound);

export default app;
