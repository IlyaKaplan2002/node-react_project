const { Book } = require('../schemas');

const addReview = async body => Book.create(body);
module.exports = addReview;