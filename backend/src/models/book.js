const Joi = require('joi');

const joiBookSchema = Joi.object({
  name: Joi.string().required(),
  author: Joi.string().required(),
  year: Joi.number().required(),
  pages: Joi.number().min(1).max(100).required(),
  rating: Joi.number().required(),
  review: Joi.string().required(),
});

module.exports = {
  joiBookSchema,
};
