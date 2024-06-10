const express = require('express');
const mssqlController = require('../controllers/mssqlController');
const router = express.Router();

router.route('/query1').get(mssqlController.query1);
router.route('/query2').get(mssqlController.query2);
router.route('/query3').get(mssqlController.query3);

module.exports = router;
