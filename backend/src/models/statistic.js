const Joi = require('joi');

const joiStatisticSchema = Joi.object({
    data: Joi.date().required(),
    pages: Joi.number().min(0).required(),
  });
    
  module.exports = {
    joiStatisticSchema,
  };