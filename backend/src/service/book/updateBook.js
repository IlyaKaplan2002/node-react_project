const { Book } = require('../schemas');

const updateBook = async (id, body) =>
  Book.findByIdAndUpdate(id, body, { new: true });
module.exports = updateBook;
