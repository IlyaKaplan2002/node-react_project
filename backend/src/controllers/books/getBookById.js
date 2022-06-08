const { bookService } = require('../../service');
const { throwError, createResponse } = require('../../helpers');

const getBookById = async (req, res) => {
  const { _id: query } = req.user;
  const result = await bookService.findBook(query);
  if (!result) {
    throwError('Not found', 404);
  }
  res.status(201).json(createResponse(201, { result }));
};

module.exports = getBookById;
