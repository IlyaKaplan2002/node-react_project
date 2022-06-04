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

module.exports = router;
