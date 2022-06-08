const express = require('express');

const { validation, ctrlWrapper, auth } = require('../../middlewares');
const { books: ctrl } = require('../../controllers');
const { joiBookSchemas } = require('../../models');

const router = express.Router();

router.post(
  '/',
  auth,
  validation(joiBookSchemas.add),
  ctrlWrapper(ctrl.addBook)
);

router.patch(
  '/:bookId/review',
  auth,
  validation(joiBookSchemas.resume),
  ctrlWrapper(ctrl.addReview)
);

router.delete('/:bookId', auth, ctrlWrapper(ctrl.removeBook));

router.get('/', auth, ctrlWrapper(ctrl.getAllBooks));

router.get('/:bookId', auth, ctrlWrapper(ctrl.getBookById));

router.put('/:bookId', auth, ctrlWrapper(ctrl.updateUSerBook));

module.exports = router;
