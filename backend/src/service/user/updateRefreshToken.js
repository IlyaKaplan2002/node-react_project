const { User } = require('../schemas');

const updateRefreshToken = async (id, refreshToken) =>
  User.findByIdAndUpdate(id, { refreshToken });

module.exports = updateRefreshToken;
