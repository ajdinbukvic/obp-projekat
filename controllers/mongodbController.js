const asyncHandler = require('express-async-handler');
const Shop = require('./../schemas/shop');

exports.query1 = asyncHandler(async (req, res, next) => {
  const doc = await Shop.find().limit(50);

  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: {
      data: doc,
    },
  });
});
