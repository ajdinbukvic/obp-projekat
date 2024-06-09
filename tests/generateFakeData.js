const faker = require('faker');

const createFakeProduct = () => {
  return {
    product_id: faker.datatype.number(),
    product_type: faker.commerce.product(),
    product_name: faker.commerce.productName(),
    product_description: faker.lorem.paragraph(),
    product_keywords: faker.lorem.words(),
    product_gender_target: faker.random.arrayElement([
      'Male',
      'Female',
      'Unisex',
    ]),
    product_category: faker.commerce.department(),
    product_season: faker.random.arrayElement([
      'Winter',
      'Spring',
      'Summer',
      'Fall',
    ]),
    product_condition: faker.random.arrayElement([
      'New',
      'Used',
      'Refurbished',
    ]),
    product_like_count: faker.datatype.number({ min: 0, max: 1000 }),
    sold: faker.datatype.boolean(),
    reserved: faker.datatype.boolean(),
    available: faker.datatype.boolean(),
    in_stock: faker.datatype.boolean(),
    should_be_gone: faker.datatype.boolean(),
    brand_id: faker.datatype.number({ min: 0, max: 100 }),
    brand_name: faker.company.companyName(),
    brand_url: faker.internet.url(),
    product_material: faker.commerce.productMaterial(),
    product_color: faker.commerce.color(),
    price_usd: faker.commerce.price(),
    seller_price: faker.commerce.price(),
    seller_earning: faker.commerce.price(),
    seller_badge: faker.random.arrayElement(['Gold', 'Silver', 'Bronze']),
    warehouse_name: faker.company.companyName(),
    seller_id: faker.datatype.number(),
    seller_username: faker.internet.userName(),
    seller_country: faker.address.countryCode(),
    seller_products_sold: faker.datatype.number({ min: 0, max: 1000 }),
    seller_num_products_listed: faker.datatype.number({ min: 0, max: 100 }),
    seller_community_rank: faker.datatype.number({ min: 0, max: 5 }),
    seller_num_followers: faker.datatype.number({ min: 0, max: 1000 }),
    seller_pass_rate: faker.datatype.float({ min: 0, max: 100 }),
  };
};

module.exports = createFakeProduct;
