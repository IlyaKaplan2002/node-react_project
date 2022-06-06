const { Training } = require('../schemas');

const updateTraining = async (query, body) =>
  Training.findOneAndUpdate(query, body, { new: true });

module.exports = updateTraining;
