const { bookService } = require('../../service');

const removeBook = async (req, res) => {
  const { _id: userId } = req.user;
  const { bookId } = req.params;
  const book = await bookService.findBooksByIdAndRemove({ _id: bookId });
  if (!book) {
    return res.status(404).send({ message: 'Not found' });
  }
  res.json({ message: 'contact deleted', status: 'success' });
};

module.exports = removeBook;
