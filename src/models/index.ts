import { Sequelize } from 'sequelize-typescript';

import config from '@/config';

import Project from './project';
import ProjectAssignment from './projectAssignment';
import User from './user';

const models = {
  User,
  Project,
  ProjectAssignment,
};

const sequelize = new Sequelize(config.db);

sequelize.addModels(Object.values(models));

export { sequelize };

export default models;
