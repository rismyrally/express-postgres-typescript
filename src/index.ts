import config from '@/config';

import app from './app';
import { sequelize } from './models';

const { env, port } = config;

(async () => {
  try {
    await sequelize.sync({ force: env === 'development' });
    console.log(`Connected to database`);

    app.listen(port, () => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
