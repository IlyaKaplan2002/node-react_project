const { bookStatusTypes } = require('../../constants');
const { createResponse, throwError } = require('../../helpers');
const {
  statisticService,
  trainingService,
  bookService,
} = require('../../service');

const addStatistic = async (req, res) => {
  const { _id: userId } = req.user;
  const { pages } = req.body;

  const training = await trainingService.getTraining(userId);

  if (!training) throwError('Training does not exist', 404);

  const { books } = training;

  let pagesLeft = pages;

  for (const book of [...books]) {
    const { _id: bookId, pagesAlreadyRead, status, pages: bookPages } = book;

    if (status === bookStatusTypes.alreadyRead) continue;

    if (status === bookStatusTypes.reading) {
      const pagesOfBookLeft = bookPages - pagesAlreadyRead;
      if (pagesOfBookLeft > pagesLeft) {
        const newPagesAlreadyRead =
          Number(pagesAlreadyRead) + Number(pagesLeft);
        await bookService.updateBook(bookId, {
          pagesAlreadyRead: newPagesAlreadyRead,
        });
        break;
      }
      if (pagesOfBookLeft === pagesLeft) {
        const newPagesAlreadyRead = bookPages;
        const newStatus = bookStatusTypes.alreadyRead;
        await bookService.updateBook(bookId, {
          status: newStatus,
          pagesAlreadyRead: newPagesAlreadyRead,
        });
        break;
      }
      const newPagesAlreadyRead = bookPages;
      const newStatus = bookStatusTypes.alreadyRead;
      pagesLeft = pagesLeft - pagesOfBookLeft;
      await bookService.updateBook(bookId, {
        status: newStatus,
        pagesAlreadyRead: newPagesAlreadyRead,
      });
      continue;
    }

    if (status === bookStatusTypes.goingToRead) {
      if (bookPages > pagesLeft) {
        const newPagesAlreadyRead = Number(pagesLeft);
        const newStatus = bookStatusTypes.reading;
        await bookService.updateBook(bookId, {
          status: newStatus,
          pagesAlreadyRead: newPagesAlreadyRead,
        });
        break;
      }
      if (bookPages === pagesLeft) {
        const newPagesAlreadyRead = bookPages;
        const newStatus = bookStatusTypes.alreadyRead;
        await bookService.updateBook(bookId, {
          status: newStatus,
          pagesAlreadyRead: newPagesAlreadyRead,
        });
        break;
      }

      const newPagesAlreadyRead = bookPages;
      const newStatus = bookStatusTypes.alreadyRead;
      pagesLeft = pagesLeft - bookPages;
      await bookService.updateBook(bookId, {
        status: newStatus,
        pagesAlreadyRead: newPagesAlreadyRead,
      });
      continue;
    }
  }

  const statistic = await statisticService.addStatistic({
    ...req.body,
    owner: userId,
    training: training._id,
  });

  res.status(201).json(createResponse(201, { statistic }));
};

module.exports = addStatistic;
