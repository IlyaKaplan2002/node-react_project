const { bookService } = require('../../service');
const { throwError, createResponse } = require('../../helpers');

const updateUSerBook = async (req, res) => {
  const { bookId } = req.params;

  const update = await bookService.updateBook({ _id: bookId }, req.body);
  if (!update) {
    throwError('Not found', 404);
  }

  res.status(201).json(createResponse(201, { update }));
};
module.exports = updateUSerBook;
