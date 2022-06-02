const Joi = require('joi');

const joiTrainingSchema = Joi.object({
  start: Joi.date().timestamp().required(),
  end: Joi.date().timestamp().required(),
});

module.exports = {
  joiTrainingSchema,
};
