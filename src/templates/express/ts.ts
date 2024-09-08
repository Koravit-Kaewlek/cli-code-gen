import express, { Request, Response, NextFunction } from 'express';

const __name__Router = express.Router();

__name__Router.get('/', (req: Request, res: Response, next: NextFunction) => {
  res.status(200).send({ data: 'ok' });
});

__name__Router.get(
  '/:id',
  (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    res.status(200).send({ data: id });
  }
);

__name__Router.post('/', (req: Request, res: Response, next: NextFunction) => {
  const body = req.body;
  res.status(200).send({ data: body });
});

__name__Router.put(
  '/:id',
  (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    res.status(200).send({ data: id });
  }
);

__name__Router.delete(
  '/:id',
  (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;
    res.status(200).send({ data: id });
  }
);

export default __name__Router;
