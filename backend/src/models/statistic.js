const Joi = require('joi');

const add = Joi.object({
  date: Joi.date().required(),
  pages: Joi.number().min(0).required(),
});

module.exports = {
  add,
};
