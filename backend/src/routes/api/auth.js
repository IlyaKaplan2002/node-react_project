const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');
const { joiUserSchemas } = require('../../models');

const router = express.Router();

router.post(
  '/signup',
  validation(joiUserSchemas.signUp),
  ctrlWrapper(ctrl.signUp)
);

router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));

module.exports = router;
