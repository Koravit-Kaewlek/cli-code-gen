import express from 'express';

const __name__Router = express.Router();

__name__Router.get('/', function (req, res, next) {
  res.status(200).send({ data: 'ok' });
});

__name__Router.get('/:id', function (req, res, next) {
  const { id } = req.params;
  res.status(200).send({ data: id });
});

__name__Router.post('/', function (req, res, next) {
  const body = req.body;
  res.status(200).send({ data: body });
});

__name__Router.put('/:id', function (req, res, next) {
  const { id } = req.params;
  res.status(200).send({ data: id });
});

__name__Router.delete('/:id', function (req, res, next) {
  const { id } = req.params;
  res.status(200).send({ data: id });
});

export default __name__Router;
