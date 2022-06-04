const { Statistic } = require('../schemas');

const addStatistic = async body => Statistic.create(body);

module.exports = addStatistic;
