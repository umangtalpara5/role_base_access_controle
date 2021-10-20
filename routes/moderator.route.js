const User = require('../models/user.model');
const router = require('express').Router();
const mongoose = require('mongoose');
const { roles } = require('../utils/constants');

//moderator routes
router.get('/moderator', async (req, res, next) => {
  try {
    res.render('moderator');
  } catch (error) {
    next(error);
  }
});


module.exports = router;
