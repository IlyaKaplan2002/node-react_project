const { statisticService } = require('../../service');
const { throwError, createResponse } = require('../../helpers');

const getStatistic = async (req, res) => {
  const { id } = req.user;
  const statistic = await statisticService.findStatistic(id);
  if (!statistic) {
    throwError('Not found', 404);
  }
  res.status(200).json(createResponse(200, { statistic }));
};

module.exports = getStatistic;
