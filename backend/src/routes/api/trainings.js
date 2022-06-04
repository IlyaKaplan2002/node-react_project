const express = require('express');
const { validation, auth, ctrlWrapper } = require('../../middlewares');
const { joiTrainingSchemas } = require('../../models');
const { trainings: ctrl } = require('../../controllers');

const router = express.Router();

router.post(
  '/',
  auth,
  validation(joiTrainingSchemas.add),
  ctrlWrapper(ctrl.addTraining)
);

module.exports = router;
