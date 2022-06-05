const { bookService } = require('../../service');
const { createResponse, throwError } = require('../../helpers');

const addReview = async (req, res) => {
  const { _id: userId } = req.user;
  const { bookId } = req.params;
  const book = await bookService.findBook({ _id: bookId, owner: userId });
  if (!book) throwError('Boook not found', 404);
  const newBook = await bookService.updateBook(bookId, req.body);
  res.status(201).json(createResponse(201, { book: newBook }));
};

module.exports = addReview;
