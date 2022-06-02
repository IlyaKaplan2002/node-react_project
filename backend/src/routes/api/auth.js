const express = require('express');

const { ctrlWrapper } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/google', ctrlWrapper(ctrl.googleAuth));
router.get('/google-redirect', ctrlWrapper(ctrl.googleRedirect));

module.exports = router;
