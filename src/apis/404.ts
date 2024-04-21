import path from 'path';
import { Request, Response } from 'express';

import serverConfig from 'utils/constants';

const notFoundPage = (req: Request, res: Response) => {
  res.status(404);
  if (req.accepts('html')) {
    return res.sendFile(path.join(serverConfig.ROOT_DIR, 'views', '404.html'));
  }
  if (req.accepts('json')) {
    return res.json({ message: '404 Not Found' });
  }
  return res.type('text').send('404 Not Found');
};

export default notFoundPage;
