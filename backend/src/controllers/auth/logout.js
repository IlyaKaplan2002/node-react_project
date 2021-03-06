const { userService } = require('../../service');
const { createResponse } = require('../../helpers');

const logout = async (req, res) => {
  const { _id: id } = req.user;
  await userService.updateToken(id, null);
  res
    .json(createResponse(204, { message: 'Logged out successfully' }))
    .status(204);
};

module.exports = logout;
