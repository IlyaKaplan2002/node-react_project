const { Book } = require('../schemas');

const findBooksByUserId = async userId => Book.find({ owner: userId });

module.exports = findBooksByUserId;
