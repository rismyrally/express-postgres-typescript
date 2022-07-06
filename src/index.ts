import config from '@/config';

import app from './app';
import AppDataSource from './models';

const { port } = config;

const initializeDatabase = async (): Promise<void> => {
  try {
    await AppDataSource.initialize();
    console.log(`Conntected to the database`);
  } catch (error) {
    console.error(`Failed to conntect to the database`, error);
  }
};

const start = async (): Promise<void> => {
  await initializeDatabase();

  app.listen(port, (): void => {
    console.log(`Server is listening on port ${port}`);
  });
};

start();
