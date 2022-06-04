const Joi = require('joi');

const add = Joi.object({
  start: Joi.date().required(),
  end: Joi.date().required().greater(Joi.ref('start')),
  books: Joi.array().items(Joi.string()).allow('').required(),
});

module.exports = {
  add,
};
