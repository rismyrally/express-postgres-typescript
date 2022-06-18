import nodeConfig from 'config';
import { Dialect } from 'sequelize/types';

interface Config {
  port: number; // The port that the express server should bind to.
  db: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: Dialect;
  };
}

const {
  name: database,
  host,
  username,
  password,
  dialect,
} = nodeConfig.get<{ name: string; host: string; username: string; password: string; dialect: Dialect }>('db');

const config: Config = {
  port: nodeConfig.get<number>('port'),
  db: {
    username,
    password,
    database,
    host,
    dialect,
  },
};

export default config;
