const { User } = require('../schemas');

const addToken = async (id, token) => User.findByIdAndUpdate(id, { token });

module.exports = addToken;
