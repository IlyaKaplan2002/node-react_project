const Joi = require('joi');

const add = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().required(),
  pages: Joi.number().min(1).required(),
});

const searchBook = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
});

const resume = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  rating: Joi.number().min(1).max(5).required(),
  review: Joi.string().required(),
});

module.exports = {
  add,
  searchBook,
  resume,
};
