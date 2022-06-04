// const queryString = require('query-string');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const jwtDecode = require('jwt-decode');
const { nanoid } = require('nanoid');
const { throwError, createResponse } = require('../../helpers');
const { userService } = require('../../service');

// const { GOOGLE_CLIENT_ID, BASE_URL } = process.env;
const { JWT_SECRET_KEY } = process.env;

const googleAuth = async (req, res) => {
  // const stringifiedParams = queryString.stringify({
  //   client_id: GOOGLE_CLIENT_ID,
  //   redirect_uri: `${BASE_URL}/api/auth/google-redirect`,
  //   scope: [
  //     'https://www.googleapis.com/auth/userinfo.email',
  //     'https://www.googleapis.com/auth/userinfo.profile',
  //   ].join(' '),
  //   response_type: 'code',
  //   access_type: 'offline',
  //   prompt: 'consent',
  // });
  // return res.redirect(
  //   `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`
  // );

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
  await userService.updateToken(newUser._id, newToken);

  res.json(
    createResponse(200, {
      token: newToken,
      user: { email, name },
    })
  );
};

module.exports = googleAuth;
