const { Book } = require('../schemas');

const findBooksByIdAndRemove = async bookId => Book.findByIdAndRemove(bookId);

module.exports = findBooksByIdAndRemove;
