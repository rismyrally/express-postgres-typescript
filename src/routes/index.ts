import { Request, Response, Router } from 'express';

import v1 from './v1';

const routes = Router();

routes.use('/v1', v1);

routes.get('/', (_req: Request, res: Response) => {
  return res.status(200).json({ message: 'Hello World!' });
});

export default routes;
