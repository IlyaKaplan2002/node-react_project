const express = require('express');
const { validation, auth, ctrlWrapper } = require('../../middlewares');
const { joiStatisticSchemas } = require('../../models');
const { statistics: ctrl } = require('../../controllers');

const router = express.Router();

router.post(
  '/',
  auth,
  validation(joiStatisticSchemas.add),
  ctrlWrapper(ctrl.addStatistic)
);

module.exports = router;
