const { Shop } = require('./models');
const Benchmark = require('benchmark');
const db = require('./models');

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to SQL Server');
  })
  .catch((err) => {
    console.error('SQL Server connection error:', err);
  });

const suite = new Benchmark.Suite();
let t0, t1, t2, t3, t4, t5;

suite
  .add('Sequelize 5', {
    defer: true,
    fn: async (deferred) => {
      const start = Date.now();
      await Shop.findAll({ limit: 5 });
      const end = Date.now();
      t0 = end - start;
      deferred.resolve();
    },
  })
  .add('Sequelize 50', {
    defer: true,
    fn: async (deferred) => {
      const start = Date.now();
      await Shop.findAll({ limit: 50 });
      const end = Date.now();
      t1 = end - start;
      deferred.resolve();
    },
  })
  .add('Sequelize 500', {
    defer: true,
    fn: async (deferred) => {
      const start = Date.now();
      await Shop.findAll({ limit: 500 });
      const end = Date.now();
      t2 = end - start;
      deferred.resolve();
    },
  })
  .add('Sequelize 5000', {
    defer: true,
    fn: async function (deferred) {
      const start = Date.now();
      await Shop.findAll({ limit: 5000 });
      const end = Date.now();
      t3 = end - start;
      deferred.resolve();
    },
  })
  .add('Sequelize 50000', {
    defer: true,
    fn: async function (deferred) {
      const start = Date.now();
      await Shop.findAll({ limit: 50000 });
      const end = Date.now();
      t4 = end - start;
      deferred.resolve();
    },
  })
  .add('Sequelize 500000', {
    defer: true,
    fn: async function (deferred) {
      const start = Date.now();
      await Shop.findAll({ limit: 500000 });
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
    console.log('Time taken for Sequelize 5:', t0 + 'ms');
    console.log('Time taken for Sequelize 50:', t1 + 'ms');
    console.log('Time taken for Sequelize 500:', t2 + 'ms');
    console.log('Time taken for Sequelize 5000:', t3 + 'ms');
    console.log('Time taken for Sequelize 50000:', t4 + 'ms');
    console.log('Time taken for Sequelize 500000:', t5 + 'ms');
    db.sequelize.close();
  })
  .run({ async: true });
