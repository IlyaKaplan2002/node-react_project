const { bookServise } = require('../../service');
const { createResponse } = require('../../helpers');

const addBook = async (req, res) => {
  console.log(bookServise);
  const { _id } = req.user;
  const books = await bookServise.addBook({ ...req.body, owner: _id });

  res.json(createResponse(200, { books }));
};

module.exports = addBook;
