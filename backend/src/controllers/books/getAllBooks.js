const { bookService } = require('../../service');
const { throwError, createResponse } = require('../../helpers');

const getAllBooks = async (req, res) => {
  const { id } = req.user;
  const books = await bookService.findBooksByUserId(id);
  if (!books) {
    throwError('Not found', 404);
  }
  res.status(201).json(createResponse(201, { books }));
};

module.exports = getAllBooks;
