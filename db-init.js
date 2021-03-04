const pgp = require('pg-promise')({});
const dbConfig = require('./config/db-config');

/* 
DB library used: pg-promise
Description: PostgreSQL interface for Node.js

[ NPM ]
https://www.npmjs.com/package/pg-promise

[ Documentation + Github]
http://vitaly-t.github.io/pg-promise/module-pg-promise.html
https://github.com/vitaly-t/pg-promise

[ Stack Overflow ]
https://stackoverflow.com/questions/36120435/verify-database-connection-with-pg-promise-when-starting-an-app
https://stackoverflow.com/questions/38692553/synchronous-programming-using-pg-promise
https://stackoverflow.com/questions/43250582/connection-pool-using-pg-promise
*/

// CREATE DATABASE OBJECT (does not automatically connect) 
let db = pgp(dbConfig);

module.exports = db;