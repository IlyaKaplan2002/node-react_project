const { Book } = require('../schemas');

const addBook = async body => Book.create(body);
module.exports = addBook;
