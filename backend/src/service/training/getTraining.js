const { Training } = require('../schemas');

const getTraining = async userId =>
  Training.findOne({ owner: userId }).populate('owner books');

module.exports = getTraining;
