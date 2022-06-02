const Joi = require('joi');

const regEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const joiSignUpSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().pattern(regEx).required(),
  password: Joi.string().min(6).max(30).required(),
  confirmPassword: Joi.string().min(6).max(30).required(),
});

const joiLoginSchema = Joi.object({
  email: Joi.string().pattern(regEx).required(),
  password: Joi.string().min(6).max(30).required(),
});

module.exports = {
  joiSignUpSchema,
  joiLoginSchema,
};
