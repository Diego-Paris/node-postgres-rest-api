const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config();

const middlewares = require('./middlewares/errorHandlers');
const api = require('./all-routes');

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());
app.use(express.json());

// Test route
app.get('/', (req, res, next) => {
  res.status(418).json({
    message: 'Server is running! 🌏'
  });
});

//-- DATABASE CONFIGURATION --//
app.db = require('./db-init');
//-- END OF DB CONFIGURATION --//


app.use('/api/v1', api);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

module.exports = app;
