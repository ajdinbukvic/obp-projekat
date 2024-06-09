const { Shop } = require('../models');
const db = require('../models');
const createFakeProduct = require('./generateFakeData');

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to SQL Server');
  })
  .catch((err) => {
    console.error('SQL Server connection error:', err);
  });

const generateAndInsertFakeData = async (num) => {
  const fakeProducts = [];
  for (let i = 0; i < num; i++) {
    fakeProducts.push(createFakeProduct());
  }

  if (num === 1) {
    const startTime = performance.now();
    await Shop.create(fakeProducts[0]);
    const endTime = performance.now();
    return endTime - startTime;
  } else {
    const startTime = performance.now();
    await Shop.bulkCreate(fakeProducts);
    const endTime = performance.now();
    return endTime - startTime;
  }
};

const testInsertPerformance = async () => {
  const testSizes = [1, 10, 100, 1000, 10000];

  for (const size of testSizes) {
    const timeTaken = await generateAndInsertFakeData(size);
    console.log(
      `Time taken to insert ${size} data: ${timeTaken.toFixed(2)} ms`
    );
  }

  await db.sequelize.close();
};

testInsertPerformance();
