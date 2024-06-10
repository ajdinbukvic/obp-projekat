const express = require('express');
const mongodbController = require('../controllers/mongodbController');
const router = express.Router();

router.route('/query1').get(mongodbController.query1);
router.route('/query2').get(mongodbController.query2);
router.route('/query3').get(mongodbController.query3);

module.exports = router;
