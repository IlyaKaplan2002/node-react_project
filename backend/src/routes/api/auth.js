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

router.get('/google', ctrlWrapper(ctrl.googleAuth));
router.post(
  '/google',
  validation(joiUserSchemas.googleAuth),
  ctrlWrapper(ctrl.googleAuth)
);

router.get('/google-redirect', ctrlWrapper(ctrl.googleRedirect));

router.get('/info', auth, ctrlWrapper(ctrl.info));

router.get('/logout', auth, ctrlWrapper(ctrl.logout));

module.exports = router;
