const { createResponse } = require('../../helpers');
const { bookService } = require('../../service');

const getBooks = async (req, res) => {
  const { _id } = req.user;
  const books = await bookService.findBooksByUserId(_id);
  res.json(createResponse(200, { books }));
};

module.exports = getBooks;
