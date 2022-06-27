import config from '@/config';

import app from './app';
import { sequelize } from './models';

const { port } = config;

sequelize.sync({ force: true }).then(() => {
  console.log(`Connected to database`);
  app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });
});
