const { bookService } = require('../../service');
const { createResponse } = require('../../helpers');

const addBook = async (req, res) => {
  const { _id } = req.user;
  const book = await bookService.addBook({ ...req.body, owner: _id });

  res.status(201).json(createResponse(201, { book }));
};

module.exports = addBook;
