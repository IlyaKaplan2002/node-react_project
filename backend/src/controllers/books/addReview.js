const { bookService } = require('../../service');
const { createResponse } = require('../../helpers');

const addReview = async (req, res) => {
  const { name, author, rating, review } = req.body;
  const findBook = await bookService.findBookByNameAuthor({ name, author });
  const { _id } = findBook;
  const addedReview = await bookService.addReview({ _id, rating, review });
  res.status(201).json(createResponse(201, { addedReview }));
};

module.exports = addReview;
