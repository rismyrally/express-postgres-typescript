import nodeConfig from 'config';

interface Config {
  port: number; // The port that the express server should bind to.
}

const config: Config = {
  port: nodeConfig.get<number>('port'),
};

export default config;
