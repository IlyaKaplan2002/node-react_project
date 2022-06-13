const { Statistic } = require('../schemas');

const findStatistic = async query => Statistic.find(query);

module.exports = findStatistic;
