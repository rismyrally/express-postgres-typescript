import config from '@/config';

import app from './app';
import AppDataSource from './models';

const { port } = config;

(async () => {
  try {
    await AppDataSource.initialize();
    console.log(`Conntected to the database`);
    app.listen(port, (): void => {
      console.log(`Server is listening on port ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
})();
