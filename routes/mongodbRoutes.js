const express = require('express');
const mongodbController = require('../controllers/mongodbController');
const router = express.Router();

router.route('/query1').get(mongodbController.query1);

module.exports = router;
