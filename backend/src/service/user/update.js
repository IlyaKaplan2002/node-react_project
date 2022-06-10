const { User } = require('../schemas');

const update = async (id, body) => User.findByIdAndUpdate(id, body);

module.exports = update;
