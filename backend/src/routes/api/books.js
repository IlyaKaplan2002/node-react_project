const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { books: ctrl } = require('../../controllers');
const { joiBookSchemas } = require('../../models');

const router = express.Router();

router.post(
  '/',
  validation(joiBookSchemas.add),
  ctrlWrapper(ctrl.addBook)
);

module.exports = router;
