const app = require('./app');

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

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

const db = require('./models');

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to SQL Server');
  })
  .catch((err) => {
    console.error('SQL Server connection error:', err);
  });

/*const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  host: 'DESKTOP-GUNNR13',
  port: 1433,
  dialect: 'mssql',
  database: 'LARGEDB',
  username: 'sa',
  password: '123',
  dialectOptions: {
    options: { encrypt: true },
  },
  authentication: {
    type: 'ntlm',
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to SQL Server');
  })
  .catch((err) => {
    console.error('SQL Server connection error:', err);
  });*/

const port = process.env.PORT || 5000;
const server = app.listen(port, () => {
  console.log(`App running on port: ${port}...`);
});

process.on('unhandledRejection', (err) => {
  console.log('UNHANDLED REJECTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
