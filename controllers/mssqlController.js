const asyncHandler = require('express-async-handler');
const { Shop } = require('../models');

exports.query1 = asyncHandler(async (req, res, next) => {
  const obj = await Shop.findAll({
    limit: 100,
  });

  res.status(200).json({
    status: 'success',
    results: obj.length,
    data: {
      data: obj,
    },
  });
});
