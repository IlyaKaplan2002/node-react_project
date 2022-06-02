const { Schema, model } = require('mongoose');
const Joi = require('joi');

const trainingSchema = Schema(
  {
    start: {
      type: Date,
      required: [true, 'Enter start of training'],
    },
    end: {
      type: Date,
      required: [true, 'Enter end of training'],
    },
    books: {
      type: Schema.Types.ObjectId,
      ref: 'book',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamp: true }
);

const joiSchema = Joi.object({
  start: Joi.date().timestamp().required(),
  end: Joi.date().timestamp().required(),
});

const Training = model('training', trainingSchema);

module.exports = {
  Training,
  joiSchema,
};
