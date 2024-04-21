import 'dotenv/config';
import path from 'path';

export const PORT = process.env?.PORT ?? 8000;

const serverConfig = {
  ENV: process.env.NODE_ENV,
  BASE_URL: process.env.APP_BASE_URL,
  ROOT_DIR: path.resolve(__dirname, '..', '..'),
  BASE_DIR: path.resolve(__dirname, '..'),
};

export default serverConfig;
