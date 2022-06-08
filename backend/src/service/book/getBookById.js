const { Book } = require('../schemas');

const getBookById = async id => Book.findById(id);

module.exports = getBookById;
