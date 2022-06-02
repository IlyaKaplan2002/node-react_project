const { Schema, model } = require('mongoose');

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

const Statistic = model('statistic', statisticSchema);

module.exports = Statistic;
