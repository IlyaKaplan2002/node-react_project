const { Schema, model } = require('mongoose');
const { bookStatusTypes } = require('../../constants');

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
    pagesAlreadyRead: {
      type: Number,
      default: 0,
    },
    status: {
      type: String,
      default: 'goingToRead',
      enum: [...Object.values(bookStatusTypes)],
    },
    rating: {
      type: Number,
    },
    review: {
      type: String,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      required: [true],
    },
  },
  { versionKey: false, timestamps: true }
);

const Book = model('book', bookSchema);

module.exports = Book;
