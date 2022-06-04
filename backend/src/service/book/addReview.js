const { Book } = require('../schemas');

const addReview = async body => {
  const { _id, rating, review } = body;
  return Book.findByIdAndUpdate(_id, { rating, review }, { new: true });
};

module.exports = addReview;
