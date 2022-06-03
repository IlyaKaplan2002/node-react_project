const { Book } = require('../schemas');

const addBook = async (id, body) => {
  Book.create(id, body);
};

module.exports = addBook;
