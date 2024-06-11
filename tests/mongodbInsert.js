const mongoose = require('mongoose');
const Shop = require('../schemas/shop');
const { performance } = require('perf_hooks');
const createFakeProduct = require('./generateFakeData');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const mongoUrl = process.env.MONGO_URL;

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
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
    await Shop.insertMany(fakeProducts);
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

  mongoose.connection.close();
};

testInsertPerformance();
