const Joi = require('joi');
const { startOfDay } = require('date-fns');

const add = Joi.object({
  start: Joi.date().required().min(startOfDay(Date.now())),
  end: Joi.date().required().greater(Joi.ref('start')),
  books: Joi.array().items(Joi.string()).allow('').required(),
});

module.exports = {
  add,
};
