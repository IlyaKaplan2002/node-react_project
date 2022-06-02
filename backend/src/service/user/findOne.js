const { User } = require('../schemas');

const findOne = async query => User.findOne(query);

module.exports = findOne;
