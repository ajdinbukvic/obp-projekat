const app = require('./app');
const mongoose = require('mongoose');
const db = require('./models');
const dotenv = require('dotenv');
dotenv.config({ path: '.env' });
const port = process.env.PORT || 5000;
const mongoUrl = process.env.MONGO_URL;

process.on('uncaughtException', (err) => {
  console.log('UNCAUGHT EXCEPTION! 💥 Shutting down...');
  console.log(err.name, err.message);
  process.exit(1);
});

mongoose
  .connect(mongoUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('MongoDB connection error:', err);
  });

db.sequelize
  .authenticate()
  .then(() => {
    console.log('Connected to SQL Server');
  })
  .catch((err) => {
    console.error('SQL Server connection error:', err);
  });

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
