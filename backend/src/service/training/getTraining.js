const { Training } = require('../schemas');

const getTraining = async userId => Training.find({ owner: userId });
console.log(getTraining);

module.exports = getTraining;
