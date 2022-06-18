import config from '@/config';

import app from './app';
import { sequelize } from './models';

const { port } = config;

sequelize.sync({ alter: true }).then(() => {
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
