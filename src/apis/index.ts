import path from 'path';
import { Request, Response } from 'express';

import serverConfig from 'utils/constants';

const homePage = (req: Request, res: Response) => {
  res.status(200);
  if (req.accepts('html')) {
    return res.sendFile(
      path.join(serverConfig.ROOT_DIR, 'views', 'index.html')
    );
  }
  if (req.accepts('json')) {
    return res.json({ message: 'Home Page' });
  }
  return res.type('text').send('Home Page');
};

export default homePage;
