const { statisticService } = require('../../service');
const { createResponse } = require('../../helpers');

const getStatistic = async (req, res) => {
  const { _id } = req.user;
  const statistic = await statisticService.findStatistic(_id);

  res.status(200).json(createResponse(200, { statistic }));
};

module.exports = getStatistic;
