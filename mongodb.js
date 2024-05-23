const Shop = require('./schemas/shop');
const Benchmark = require('benchmark');
const mongoose = require('mongoose');
const mongoUrl = 'mongodb://localhost:27017/LARGEDB';

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

const suite = new Benchmark.Suite();
let t0, t1, t2, t3, t4, t5;

suite
  .add('Mongoose 5', {
    defer: true,
    fn: async (deferred) => {
      const start = Date.now();
      await Shop.find().limit(5);
      const end = Date.now();
      t0 = end - start;
      deferred.resolve();
    },
  })
  .add('Mongoose 50', {
    defer: true,
    fn: async (deferred) => {
      const start = Date.now();
      await Shop.find().limit(50);
      const end = Date.now();
      t1 = end - start;
      deferred.resolve();
    },
  })
  .add('Mongoose 500', {
    defer: true,
    fn: async function (deferred) {
      const start = Date.now();
      await Shop.find().limit(500);
      const end = Date.now();
      t2 = end - start;
      deferred.resolve();
    },
  })
  .add('Mongoose 5000', {
    defer: true,
    fn: async function (deferred) {
      const start = Date.now();
      await Shop.find().limit(5000);
      const end = Date.now();
      t3 = end - start;
      deferred.resolve();
    },
  })
  .add('Mongoose 50000', {
    defer: true,
    fn: async function (deferred) {
      const start = Date.now();
      await Shop.find().limit(50000);
      const end = Date.now();
      t4 = end - start;
      deferred.resolve();
    },
  })
  .add('Mongoose 500000', {
    defer: true,
    fn: async function (deferred) {
      const start = Date.now();
      await Shop.find().limit(500000);
      const end = Date.now();
      t5 = end - start;
      deferred.resolve();
    },
  });

suite
  .on('cycle', (event) => {
    console.log(String(event.target));
    console.log('Mean:', event.target.stats.mean * 1000);
  })
  .on('complete', function () {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
    console.log('Time taken for Mongoose 5:', t0 + 'ms');
    console.log('Time taken for Mongoose 50:', t1 + 'ms');
    console.log('Time taken for Mongoose 500:', t2 + 'ms');
    console.log('Time taken for Mongoose 5000:', t3 + 'ms');
    console.log('Time taken for Mongoose 50000:', t4 + 'ms');
    console.log('Time taken for Mongoose 500000:', t5 + 'ms');
    mongoose.connection.close();
  })
  .run({ async: true });
