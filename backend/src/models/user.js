const Joi = require('joi');

const regEx =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const signUp = Joi.object({
  name: Joi.string().min(3).max(100).required(),
  email: Joi.string().pattern(regEx).required(),
  password: Joi.string().min(6).max(30).required(),
  confirmPassword: Joi.string().min(6).max(30).required(),
});

const login = Joi.object({
  email: Joi.string().pattern(regEx).required(),
  password: Joi.string().min(6).max(30).required(),
});

const googleAuth = Joi.object({
  token: Joi.string().required(),
});

module.exports = {
  signUp,
  login,
  googleAuth,
};
