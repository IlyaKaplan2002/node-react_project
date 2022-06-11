const addBook = require('./addBook');
const updateBook = require('./updateBook');
const findBooksByUserId = require('./findBooksByUserId');
const getBookById = require('./getBookById');
const findBooksByIdAndRemove = require('./findBooksByIdAndRemove');
const findBook = require('./findBook');

module.exports = {
  addBook,
  updateBook,
  findBooksByUserId,
  getBookById,
  findBook,
  findBooksByIdAndRemove,
};
