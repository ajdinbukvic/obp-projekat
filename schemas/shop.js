const mongoose = require('mongoose');

const shopSchema = mongoose.Schema(
  {
    product_id: { type: Number, required: true },
    product_type: { type: String },
    product_name: { type: String },
    product_description: { type: String },
    product_keywords: { type: String },
    product_gender_target: { type: String },
    product_category: { type: String },
    product_season: { type: String },
    product_condition: { type: String },
    product_like_count: { type: Number },
    sold: { type: Boolean },
    reserved: { type: Boolean },
    available: { type: Boolean },
    in_stock: { type: Boolean },
    should_be_gone: { type: Boolean },
    brand_id: { type: Number },
    brand_name: { type: String },
    brand_url: { type: String },
    product_material: { type: String },
    product_color: { type: String },
    price_usd: { type: Number },
    seller_price: { type: Number },
    seller_earning: { type: Number },
    seller_badge: { type: String },
    warehouse_name: { type: String },
    seller_id: { type: Number },
    seller_username: { type: String },
    seller_country: { type: String },
    seller_products_sold: { type: Number },
    seller_num_products_listed: { type: Number },
    seller_community_rank: { type: Number },
    seller_num_followers: { type: Number },
    seller_pass_rate: { type: Number },
  },
  { timestamps: true }
);

const Shop = mongoose.model('Shop', shopSchema);

module.exports = Shop;
