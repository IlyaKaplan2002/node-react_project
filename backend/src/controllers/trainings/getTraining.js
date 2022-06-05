const { trainingService } = require('../../service');
const { createResponse, throwError } = require('../../helpers');

const getTraining = async (req, res) => {
  const { id } = req.user;
  const infoTraining = await trainingService.getTraining(id);
  if (!infoTraining) {
    res
      .status(204)
      .json(createResponse(204, { message: "you don't have training" }));
  }
  console.log(infoTraining);
  res.status(200).json(createResponse(200, { infoTraining }));
};

module.exports = getTraining;
