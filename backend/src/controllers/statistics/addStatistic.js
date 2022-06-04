const { createResponse } = require('../../helpers');
const { statisticService } = require('../../service');

const addStatistic = async (req, res) => {
  const { _id } = req.user;
  const statistic = await statisticService.addStatistic({
    ...req.body,
    owner: _id,
  });

  res.status(201).json(createResponse(201, { statistic }));
};

module.exports = addStatistic;
