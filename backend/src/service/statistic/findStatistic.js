const { Statistic } = require('../schemas');

const findStatistic = async userId => Statistic.find({ owner: userId });

module.exports = findStatistic;
