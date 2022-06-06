const { Schema, model } = require('mongoose');

const statisticSchema = Schema(
  {
    date: {
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
  { versionKey: false, timestamps: true }
);

const Statistic = model('statistic', statisticSchema);

module.exports = Statistic;
