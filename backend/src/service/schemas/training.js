const { Schema, model } = require('mongoose');

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
      type: [Schema.Types.ObjectId],
      ref: 'book',
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
  },
  { versionKey: false, timestamps: true }
);

const Training = model('training', trainingSchema);

module.exports = Training;
