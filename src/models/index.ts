import 'reflect-metadata';
import { DataSource } from 'typeorm';

import config from '@/config';

import Project from './project';
import User from './user';

const { env, db } = config;
const isDev = env === 'development';

const AppDataSource = new DataSource({
  type: db.dialect,
  ...db,
  entities: [User, Project],
  synchronize: isDev,
  logging: isDev,
});

export { User, Project };

export default AppDataSource;
