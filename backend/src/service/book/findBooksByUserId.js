const { Book } = require('../schemas');

const findBooksByUserId = async userId => Book.find({ owner: userId }).sort({createdAt: 'descending'});

module.exports = findBooksByUserId;
