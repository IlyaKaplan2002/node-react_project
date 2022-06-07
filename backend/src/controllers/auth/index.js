const signUp = require('./signUp');
const login = require('./login');
const googleAuth = require('./googleAuth');
const info = require('./info');
const logout = require('./logout');
const currentUser = require('./currentUser');

module.exports = {
  signUp,
  login,
  googleAuth,
  info,
  logout,
  currentUser,
};
