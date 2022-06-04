const queryString = require('query-string');
const axios = require('axios');
const { nanoid } = require('nanoid');
const { userService } = require('../../service');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { createResponse } = require('../../helpers');

const { BASE_URL, GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET, JWT_SECRET_KEY } =
  process.env;

const googleRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get('host')}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = queryString.parse(urlObj.search);
  const code = urlParams.code;
  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: 'post',
    data: {
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      redirect_uri: `${BASE_URL}/api/auth/google-redirect`,
      grant_type: 'authorization_code',
      code,
    },
  });
  const userData = await axios({
    url: 'https://www.googleapis.com/oauth2/v2/userinfo',
    method: 'get',
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });

  const { name, email } = userData.data;

  let user = await userService.findOne({ email });

  if (!user) {
    const hashedPassword = bcrypt.hashSync(nanoid(), bcrypt.genSaltSync(10));
    user = await userService.create({
      name: name,
      email: email,
      password: hashedPassword,
    });
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, JWT_SECRET_KEY, { expiresIn: '1d' });

  await userService.updateToken(user._id, token);

  res.json(
    createResponse(200, {
      token,
      user: { email: user.email, name: user.name },
    })
  );
};

module.exports = googleRedirect;
