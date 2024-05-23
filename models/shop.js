module.exports = (sequelize, DataTypes) => {
  const Shop = sequelize.define(
    'Shop',
    {
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      product_type: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      product_name: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      product_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      product_keywords: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      product_gender_target: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      product_category: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      product_season: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      product_condition: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      product_like_count: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      sold: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      reserved: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      available: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      in_stock: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      should_be_gone: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      brand_id: {
        type: DataTypes.SMALLINT,
        allowNull: true,
      },
      brand_name: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      brand_url: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      product_material: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      product_color: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      price_usd: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      seller_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      seller_earning: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      seller_badge: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      has_cross_border_fees: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      buyers_fees: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      warehouse_name: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      seller_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      seller_username: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      usually_ships_within: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      seller_country: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      seller_products_sold: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      seller_num_products_listed: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      seller_community_rank: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      seller_num_followers: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      seller_pass_rate: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      tableName: 'shop',
      timestamps: false,
    }
  );
  return Shop;
};
