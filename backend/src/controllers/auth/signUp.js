const bcrypt = require('bcryptjs');
const { User } = require('../../service/schemas');
const { throwError, createResponse } = require('../../helpers');

const signUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    throwError(`User with ${email} already exists`, 409);
  }

  if (password !== confirmPassword) {
    res.json(throwError(`Passwords do not match`, 400));
  }

  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await User.create({ name, email, password: hashedPassword });
  res.json(createResponse(201, result));
};

module.exports = signUp;
