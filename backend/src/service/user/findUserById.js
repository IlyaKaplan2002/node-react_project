const { User } = require('../schemas');

const findUserById = async id => User.findById(id);

module.exports = findUserById;
