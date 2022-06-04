const { bookService } = require('../../service');
const { createResponse } = require('../../helpers');

const addReview = async (req, res) => {
  const { _id } = req.user;
  const review = await bookService.addReview({ ...req.body, owner: _id });

  res.status(201).json(createResponse(201, { review }));
};

module.exports = addReview;