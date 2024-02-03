function generate({ name }, self, feature, config) {
  return `
const express = require('express');

const ${name}Router = express.Router();

${name}Router.get('/', function(req, res, next) {
  res.status(200).send({ data: "ok" });
});

${name}Router.get('/:id', function(req, res, next) {
  const { id } = req.params
  res.status(200).send({ data: id });
});

${name}Router.put('/:id', function(req, res, next) {
  const { id } = req.params
  res.status(200).send({ data: id });
});

${name}Router.delete('/:id', function(req, res, next) {
  const { id } = req.params
  res.status(200).send({ data: id });
});

module.exports = ${name}Router;
  `;
}
module.exports = { generate };
