const { Schema, model } = require('mongoose');

const bookSchema = Schema(
  {
    name: {
      type: String,
      required: [true, 'Enter book title'],
    },
    author: {
      type: String,
      required: [true, 'Enter book author'],
    },
    year: {
      type: Number,
      required: [true, 'Enter book year'],
    },
    pages: {
      type: Number,
      required: [true, 'Enter book pages'],
    },
    rating: {
      type: Number,
      required: [true, 'Enter book rating'],
    },
    review: {
      type: String,
      required: [true, 'Enter book review'],
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true],
    },
  },
  { versionKey: false, timestamp: true }
);

const Book = model('book', bookSchema);

module.exports = {
  Book,
};
