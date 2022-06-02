const { Schema, model } = require('mongoose');
const Joi = require('joi');

const statisticSchema = Schema(
  {
    data: {
      type: Date,
      required: [true, 'Enter is data'],
    },
    pages: {
      type: Number,
      required: [true, 'Enter book pages'],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamp: true }
);

const joiSchema = Joi.object({
  data: Joi.date().required(),
  pages: Joi.number().min(0).required(),
});

const Statistic = model('statistic', statisticSchema);

module.exports = {
  Statistic,
  joiSchema,
};
