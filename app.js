const express = require('express');
const morgan = require('morgan');
const mssqlRoutes = require('./routes/mssqlRoutes');
const mongodbRoutes = require('./routes/mongodbRoutes');

const app = express();

app.use(morgan('dev'));

app.use('/mssql', mssqlRoutes);
app.use('/mongodb', mongodbRoutes);

module.exports = app;
