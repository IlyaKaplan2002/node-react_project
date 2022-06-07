const addBook = require('./addBook');
const findBook = require('./findBook');
const updateBook = require('./updateBook');
const findBooksByUserId = require('./findBooksByUserId');
const findBooksByIdAndRemove = require('./findBooksByIdAndRemove');
module.exports = {
  addBook,
  findBook,
  updateBook,
  findBooksByUserId,
  findBooksByIdAndRemove,
};
