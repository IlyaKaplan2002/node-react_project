const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { userService } = require('../../service');
const { throwError, createResponse } = require('../../helpers');

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await userService.findOne({ email });
  if (!user) {
    throwError(`Email or password is wrong`, 401);
  }

  const passCompare = bcrypt.compareSync(password, user.password);

  if (!passCompare) {
    throwError(`Email or password is wrong`, 401);
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, { expiresIn: '1d' });

  await userService.addToken(user._id, token);

  res.json(
    createResponse(200, {
      token,
      user: { email, name: user.name },
    })
  );
};

module.exports = login;
