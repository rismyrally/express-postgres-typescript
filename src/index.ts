import app from './app';
import config from './config';

const { port } = config;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
