const bcrypt = require('bcryptjs');
const { userService } = require('../../service');
const { throwError, createResponse } = require('../../helpers');

const signUp = async (req, res) => {
  const { name, email, password, confirmPassword } = req.body;

  if (password !== confirmPassword) {
    res.json(throwError(`Passwords do not match`, 400));
  }

  const user = await userService.findOne({ email });
  if (user) {
    throwError(`User with ${email} already exists`, 409);
  }

  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  const result = await userService.create({
    name,
    email,
    password: hashedPassword,
  });
  res.json(
    createResponse(201, { user: { email: result.email, name: result.name } })
  );
};

module.exports = signUp;
