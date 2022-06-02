const Joi = require('joi');

const add = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().required(),
  pages: Joi.number().min(1).max(100).required(),
});

const resume = Joi.object({
  rating: Joi.number().min(1).max(5).required(),
  review: Joi.string().required(),
});

module.exports = {
  add,
  resume,
};
