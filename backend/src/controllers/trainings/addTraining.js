const { trainingService } = require('../../service');
const { createResponse, throwError } = require('../../helpers');
const { bookService } = require('../../service');

const addTraining = async (req, res) => {
  const { _id } = req.user;

  const { books } = req.body;

  const usersBooksIds = await bookService
    .findBooksByUserId(_id)
    .then(res => res.map(item => item._id.toString()));

  books.forEach(book => {
    if (!usersBooksIds.includes(book)) throwError('User has no such book', 404);
  });

  const oldTraining = await trainingService.getTraining(_id);

  let training;

  if (!oldTraining) {
    training = await trainingService.addTraining({
      ...req.body,
      owner: _id,
    });
  } else {
    training = await trainingService.updateTraining({ owner: _id }, req.body);
  }

  res.status(201).json(createResponse(201, { training }));
};

module.exports = addTraining;
