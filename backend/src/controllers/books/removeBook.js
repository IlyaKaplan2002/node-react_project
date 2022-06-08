const { bookService } = require('../../service');
const { throwError } = require('../../helpers');

const removeBook = async (req, res) => {
  const { bookId } = req.params;
  const book = await bookService.findBooksByIdAndRemove({ _id: bookId });
  if (!book) {
    throwError('Not found', 404);
  }
  res.json({ message: 'contact deleted', status: 'success' });
};

module.exports = removeBook;
