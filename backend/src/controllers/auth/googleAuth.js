const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');
const { nanoid } = require('nanoid');
const { throwError, createResponse } = require('../../helpers');
const { userService } = require('../../service');

const { JWT_SECRET_KEY } = process.env;

const googleAuth = async (req, res) => {
  const { token } = req.body;
  let userData = {};
  try {
    userData = jwtDecode(token);
  } catch (error) {
    throwError('Invalid token', 400);
  }

  const { name, email } = userData;

  const user = await userService.findOne({ email });

  if (!user) {
    const hashedPassword = bcrypt.hashSync(nanoid(), bcrypt.genSaltSync(10));
    await userService.create({ name, email, password: hashedPassword });
  }

  const newUser = await userService.findOne({ email });

  const payload = {
    id: newUser._id,
  };

  const newToken = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1d' });
  const newRefreshToken = jwt.sign(payload, JWT_SECRET_KEY, {
    expiresIn: '365d',
  });

  await userService.update(newUser._id, {
    token: newToken,
    refreshToken: newRefreshToken,
  });

  res.json(
    createResponse(200, {
      token: newToken,
      refreshToken: newRefreshToken,
      user: { email, name },
    })
  );
};

module.exports = googleAuth;
