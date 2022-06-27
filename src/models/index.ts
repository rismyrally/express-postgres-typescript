import { Sequelize } from 'sequelize-typescript';

import config from '@/config';

import Project from './project';
import ProjectAssignment from './projectAssignment';
import User from './user';

const models: {
  [key: string]: any;
} = {
  User,
  Project,
  ProjectAssignment,
};

const sequelize = new Sequelize(config.db);

sequelize.addModels(Object.values(models));

Object.keys(models).forEach((modelName) => {
  if ('associate' in models[modelName]) {
    models[modelName].associate(models);
  }
});

export { sequelize };

export default models;
