const asyncHandler = require('express-async-handler');
const { Shop } = require('../models');
const { Op } = require('sequelize');
const db = require('../models');

exports.query1 = asyncHandler(async (req, res, next) => {
  const obj = await Shop.findAll({
    attributes: [
      'product_category',
      [db.sequelize.fn('AVG', db.sequelize.col('price_usd')), 'averagePrice'],
      [
        db.sequelize.fn('SUM', db.sequelize.col('product_like_count')),
        'totalLikes',
      ],
    ],
    where: {
      product_condition: 'New',
      price_usd: { [Op.gt]: 100 },
    },
    group: ['product_category'],
    order: [[db.sequelize.literal('averagePrice'), 'DESC']],
  });

  res.status(200).json({
    status: 'success',
    results: obj.length,
    data: {
      data: obj,
    },
  });
});

exports.query2 = asyncHandler(async (req, res, next) => {
  const obj = await Shop.findAll({
    attributes: ['product_name', 'price_usd', 'seller_username'],
    where: {
      product_name: {
        [Op.like]: '%test%',
      },
    },
    order: [['price_usd', 'DESC']],
  });

  res.status(200).json({
    status: 'success',
    results: obj.length,
    data: {
      data: obj,
    },
  });
});

exports.query3 = asyncHandler(async (req, res, next) => {
  const obj = await Shop.findAll({
    where: {
      [Op.and]: [
        {
          [Op.or]: [
            { seller_num_followers: { [Op.lte]: 10 } },
            { seller_country: { [Op.in]: ['China', 'Portugal', 'France'] } },
          ],
        },
        {
          seller_products_sold: { [Op.between]: [10000, 13500] },
        },
      ],
    },
  });

  res.status(200).json({
    status: 'success',
    results: obj.length,
    data: {
      data: obj,
    },
  });
});
