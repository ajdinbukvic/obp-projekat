const asyncHandler = require('express-async-handler');
const Shop = require('./../schemas/shop');
const { performance } = require('perf_hooks');

exports.query1 = asyncHandler(async (req, res, next) => {
  const doc = await Shop.aggregate([
    {
      $match: {
        product_condition: 'New',
        price_usd: { $gt: 100 },
      },
    },
    {
      $group: {
        _id: '$product_category',
        averagePrice: { $avg: '$price_usd' },
        totalLikes: { $sum: '$product_like_count' },
      },
    },
    {
      $sort: { averagePrice: -1 },
    },
  ]);

  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: {
      data: doc,
    },
  });
});

exports.query2 = asyncHandler(async (req, res, next) => {
  const doc = await Shop.find(
    { product_name: { $regex: 'test', $options: 'i' } },
    { product_name: 1, price_usd: 1, seller_username: 1 }
  ).sort({ price_usd: -1 });

  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: {
      data: doc,
    },
  });
});

exports.query3 = asyncHandler(async (req, res, next) => {
  const doc = await Shop.find({
    $and: [
      {
        $or: [
          { seller_num_followers: { $lte: 10 } },
          { seller_country: { $in: ['China', 'Portugal', 'France'] } },
        ],
      },
      {
        seller_products_sold: { $gte: 10000, $lte: 13500 },
      },
    ],
  });

  res.status(200).json({
    status: 'success',
    results: doc.length,
    data: {
      data: doc,
    },
  });
});
