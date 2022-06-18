import config from '@/config';

import app from './app';

const { port } = config;

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
