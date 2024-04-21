import { type CorsOptions } from 'cors';
import serverConfig from 'utils/constants';
import allowedOrigins from './allowedOrigins';

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    if (!origin || allowedOrigins[serverConfig.ENV].indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  optionsSuccessStatus: 200,
};

export default corsOptions;
