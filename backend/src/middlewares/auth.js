const jwt = require('jsonwebtoken');
const { userService } = require('../service');
const { throwError } = require('../helpers');

const { JWT_SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (bearer !== 'Bearer') {
      throw throwError('Bearer should be in Authorization header', 401);
    }

    if (!token) {
      throw throwError('Token was not provided', 401);
    }

    const { id } = jwt.verify(token, JWT_SECRET_KEY);
    const user = await userService.findUserById(id);

    if (!user || user.token !== token) {
      throw throwError('User was logged out', 401);
    }

    req.user = user;
    next();
  } catch (error) {
    if (error.message === 'Invalid signature') {
      error.status = 401;
    }
    next(error);
  }
};

module.exports = auth;
