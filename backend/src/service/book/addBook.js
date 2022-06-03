const { Book } = require('../schemas');

const addBook = async (id, name, author, year, pages) => {
  Book.findByIdAndUpdate(id, { name, author, year, pages });
};

module.exports = addBook;
