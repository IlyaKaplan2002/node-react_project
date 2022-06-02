const Joi = require('joi');

const add = Joi.object({
  start: Joi.date().timestamp().required(),
  end: Joi.date().timestamp().required(),
});

module.exports = {
  add,
};
