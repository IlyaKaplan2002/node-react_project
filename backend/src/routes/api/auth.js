const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');
const { joiSignUpSchema } = require('../../models/user');

const router = express.Router();

router.post('/signup', validation(joiSignUpSchema), ctrlWrapper(ctrl.signUp));

module.exports = router;
