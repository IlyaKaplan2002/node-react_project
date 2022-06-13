const jwt = require('jsonwebtoken');
const { throwError, createResponse } = require('../../helpers');
const { userService } = require('../../service');

const { JWT_SECRET_KEY } = process.env;

const refresh = async (req, res) => {
  try {
    const { authorization = '' } = req.headers;
    const [bearer, refreshToken] = authorization.split(' ');

    if (bearer !== 'Bearer') {
      throwError('Bearer should be in Authorization header', 401);
    }

    if (!refreshToken) {
      throwError('Token was not provided', 401);
    }

    const { id } = jwt.verify(refreshToken, JWT_SECRET_KEY);
    const user = await userService.findUserById(id);

    if (!user || user.refreshToken !== refreshToken) {
      throwError('Token is invalid', 401);
    }

    const payload = {
      id: user._id,
    };

    const newToken = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1d' });
    const newRefreshToken = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: '365d',
    });

    await userService.update(user._id, {
      token: newToken,
      refreshToken: newRefreshToken,
    });

    res.json(
      createResponse(200, {
        token: newToken,
        refreshToken: newRefreshToken,
        user: { email: user.email, name: user.name },
      })
    );
  } catch (error) {
    if (error.message === 'Invalid signature') {
      throwError(error.message, 401);
    }

    throwError(error.message, error.status);
  }
};

module.exports = refresh;
