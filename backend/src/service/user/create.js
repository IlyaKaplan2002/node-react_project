const { User } = require('../schemas');

const create = async body => User.create(body);

module.exports = create;
