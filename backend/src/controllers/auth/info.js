const { createResponse } = require('../../helpers');

const info = (req, res, next) => {
  const { email, name } = req.user;

  res.json(createResponse(200, { user: { email, name } }));
};

module.exports = info;
