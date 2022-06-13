const express = require('express');

const { validation, ctrlWrapper, auth } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');
const { joiUserSchemas } = require('../../models');

const router = express.Router();

router.post(
  '/signup',
  validation(joiUserSchemas.signUp),
  ctrlWrapper(ctrl.signUp)
);

router.post(
  '/login',
  validation(joiUserSchemas.login),
  ctrlWrapper(ctrl.login)
);

router.post(
  '/google',
  validation(joiUserSchemas.googleAuth),
  ctrlWrapper(ctrl.googleAuth)
);

router.get('/info', auth, ctrlWrapper(ctrl.info));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

router.get('/refresh', ctrlWrapper(ctrl.refresh));

module.exports = router;
