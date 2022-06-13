const { Training } = require('../schemas');

const removeTraining = id => Training.findByIdAndDelete(id);

module.exports = removeTraining;
