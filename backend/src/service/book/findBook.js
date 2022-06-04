const { Book } = require('../schemas');

const findBook = async query => Book.findOne(query);

module.exports = findBook;
