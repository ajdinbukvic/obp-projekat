const Shop = require('../schemas/shop');
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
const meanTime = [];

suite
  .add('Mongoose 5', {
    defer: true,
    fn: async (deferred) => {
      await Shop.find().limit(5);
      deferred.resolve();
    },
  })
  .add('Mongoose 50', {
    defer: true,
    fn: async (deferred) => {
      await Shop.find().limit(50);
      deferred.resolve();
    },
  })
  .add('Mongoose 500', {
    defer: true,
    fn: async function (deferred) {
      await Shop.find().limit(500);
      deferred.resolve();
    },
  })
  .add('Mongoose 5000', {
    defer: true,
    fn: async function (deferred) {
      await Shop.find().limit(5000);
      deferred.resolve();
    },
  })
  .add('Mongoose 50000', {
    defer: true,
    fn: async function (deferred) {
      await Shop.find().limit(50000);
      deferred.resolve();
    },
  })
  .add('Mongoose 500000', {
    defer: true,
    fn: async function (deferred) {
      await Shop.find().limit(500000);
      deferred.resolve();
    },
  });

suite
  .on('cycle', (event) => {
    console.log(String(event.target));
    meanTime.push({
      name: String(event.target).split('x')[0],
      time: event.target.stats.mean * 1000,
    });
  })
  .on('complete', function () {
    console.log('The fastest is ' + this.filter('fastest').map('name'));
    for (let i = 0; i < meanTime.length; i++) {
      console.log(
        `Mean time spent on ${meanTime[i].name} find: ${meanTime[
          i
        ].time.toFixed(2)} ms`
      );
    }
    mongoose.connection.close();
  })
  .run({ async: true });
