import 'dotenv/config';
import chalk from 'chalk';

// utils
import { PORT } from 'utils/constants';

import app from './app';

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(
    chalk.hex('#fffa65')('[server]:'),
    chalk.hex('#2ed573')('Server is running at'),
    chalk.hex('#1e90ff').underline.bold(`http://localhost:${PORT}`)
  );
});
