const { trainingService } = require('../../service');
const { createResponse, throwError } = require('../../helpers');

const getTraining = async (req, res) => {
  const { id } = req.user;
  const training = await trainingService.getTraining(id);
  if (!training) {
    throwError('Not found', 404);
  }

  res.status(200).json(createResponse(200, { training }));
};

module.exports = getTraining;
