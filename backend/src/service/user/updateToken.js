const { User } = require('../schemas');

const updateToken = async (id, token) =>
  User.findByIdAndUpdate(id, { token }, { new: true });

module.exports = updateToken;
