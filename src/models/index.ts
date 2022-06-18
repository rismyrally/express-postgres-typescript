import fs from 'fs';
import path from 'path';

import { Sequelize, DataTypes } from 'sequelize';

import config from '@/config';

const basename = path.basename(__filename);

const sequelize = new Sequelize(config.db);

const models: {
  [key: string]: any;
} = {};

fs.readdirSync(__dirname)
  .filter((file) => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.ts';
  })
  .forEach((file) => {
    const model = require(path.join(__dirname, file))(sequelize, DataTypes);
    models[model.name] = model;
  });

Object.keys(models).forEach((modelName) => {
  if (models[modelName].associate) {
    models[modelName].associate(models);
  }
});

export { sequelize };

export default models;
