const { Shop } = require('../models');
const Benchmark = require('benchmark');
const db = require('../models');

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to SQL Server');
  })
  .catch((err) => {
    console.error('SQL Server connection error:', err);
  });

const suite = new Benchmark.Suite();
const meanTime = [];

suite
  .add('Sequelize 5', {
    defer: true,
    fn: async (deferred) => {
      await Shop.findAll({ limit: 5 });
      deferred.resolve();
    },
  })
  .add('Sequelize 50', {
    defer: true,
    fn: async (deferred) => {
      await Shop.findAll({ limit: 50 });
      deferred.resolve();
    },
  })
  .add('Sequelize 500', {
    defer: true,
    fn: async (deferred) => {
      await Shop.findAll({ limit: 500 });
      deferred.resolve();
    },
  })
  .add('Sequelize 5000', {
    defer: true,
    fn: async function (deferred) {
      await Shop.findAll({ limit: 5000 });
      deferred.resolve();
    },
  })
  .add('Sequelize 50000', {
    defer: true,
    fn: async function (deferred) {
      await Shop.findAll({ limit: 50000 });
      deferred.resolve();
    },
  })
  .add('Sequelize 500000', {
    defer: true,
    fn: async function (deferred) {
      await Shop.findAll({ limit: 500000 });
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
    db.sequelize.close();
  })
  .run({ async: true });
