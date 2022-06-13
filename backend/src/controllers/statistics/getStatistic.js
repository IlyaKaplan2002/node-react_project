const { statisticService, trainingService } = require('../../service');
const { createResponse } = require('../../helpers');

const getStatistic = async (req, res) => {
  const { _id } = req.user;
  const training = await trainingService.getTraining(_id);
  const statistic = await statisticService.findStatistic({
    owner: _id,
    training: training._id,
  });

  res.status(200).json(createResponse(200, { statistic }));
};

module.exports = getStatistic;
