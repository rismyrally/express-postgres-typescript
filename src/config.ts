import nodeConfig from 'config';

interface Config {
  env: string;
  port: number; // The port that the express server should bind to.
  db: {
    username: string;
    password: string;
    database: string;
    host: string;
    dialect: never;
  };
}

const {
  name: database,
  host,
  username,
  password,
  dialect,
} = nodeConfig.get<{ name: string; host: string; username: string; password: string; dialect: never }>('db');

const config: Config = {
  env: nodeConfig.get<string>('env'),
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
