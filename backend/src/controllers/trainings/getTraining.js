const { trainingService } = require('../../service');
const { createResponse } = require('../../helpers');

const getTraining = async (req, res) => {
  const { id } = req.user;
  const training = await trainingService.getTraining(id);

  res.status(200).json(createResponse(200, { training: training || null }));
};

module.exports = getTraining;
