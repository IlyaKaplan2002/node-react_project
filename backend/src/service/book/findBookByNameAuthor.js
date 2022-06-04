const { Book } = require('../schemas');

const findBookByNameAuthor = async query => Book.findOne(query);

module.exports = findBookByNameAuthor;
