const { bookService } = require('../../service');
const { throwError, createResponse } = require('../../helpers');

const removeBook = async (req, res) => {
  const { _id: userId } = req.user;

  const { bookId } = req.params;

  const book = await bookService.getBookById(bookId);

  if (!book) {
    throwError('Not found', 404);
  }

  if (book.owner.toString() !== userId.toString()) {
    throwError('Forbidden', 403);
  }

  await bookService.findBooksByIdAndRemove({ _id: bookId });

  res.json(createResponse(204, { message: 'Book deleted' }));
};

module.exports = removeBook;
