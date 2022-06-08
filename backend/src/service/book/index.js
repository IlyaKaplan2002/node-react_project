const addBook = require('./addBook');
const updateBook = require('./updateBook');
const findBooksByUserId = require('./findBooksByUserId');
const findBooksByIdAndRemove = require('./findBooksByIdAndRemove');
module.exports = {
  addBook,
  updateBook,
  findBooksByUserId,
  findBooksByIdAndRemove,
};
