const { Training } = require('../schemas');

const addTraining = async body => Training.create(body);

module.exports = addTraining;
