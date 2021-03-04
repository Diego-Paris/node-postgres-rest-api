const globals = require('./globals');

const databaseConfig = {
  host: globals.PG_HOST,
  user: globals.PG_USER,
  password: globals.PG_PASS,
  database: globals.PG_DB,
  port: globals.PG_PORT,
  ssl: globals.NODE_ENV === 'production', // enable only in production, ssl is used for azure connections
};

module.exports = databaseConfig;
