const { User } = require('../schemas');

const updateToken = async (id, token) => {
  try {
    return await User.updateOne({ _id: id }, { token });
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateToken;
