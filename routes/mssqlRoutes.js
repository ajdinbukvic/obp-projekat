const express = require('express');
const mssqlController = require('../controllers/mssqlController');
const router = express.Router();

router.route('/query1').get(mssqlController.query1);

module.exports = router;
