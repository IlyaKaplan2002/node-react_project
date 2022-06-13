const { bookService } = require('../../service');
const { throwError, createResponse } = require('../../helpers');

const removeBook = async (req, res) => {
  const { _id: userId } = req.user;

  const { bookId } = req.params;
  const book = await bookService.findBooksByIdAndRemove({ _id: bookId });

  if (!book) {
    throwError('Not found', 404);
  }

  if (book.owner !== userId) {
    throwError('Forbidden', 403);
  }

  res.json(createResponse(204, { message: 'Book deleted' }));
};

module.exports = removeBook;
