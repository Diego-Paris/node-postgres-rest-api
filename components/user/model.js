const app = require('../../app');
const db = require('../../db-init');
const to = require('../../utils').to;

let mu = {};

// with this func we can make a call to the database
// and expect a response, at this layer we only need to worry
// with making calls to the database no need to modify or clean
// up the result once retrieved.  
mu.getByID = async (idToFind) => {

  let query = `
    SELECT *
    FROM users
    WHERE id=${idToFind};
  `;

  const [err, result] = await to(db.any(query));

  // An error occurred locally attempting to send the query
  // or an error ocurred in the database and it sent a response
  if (err || result.severity === 'ERROR') {
    throw err;
  }

  if (result.length === 0) {
    throw new Error("User is not found");
  }

  return result[0];
}

mu.getAll = async (filters) => {

  let query = `
    SELECT *
    FROM users
  `;

  if ('active' in filters) {
    query += `
    WHERE active = ${filters.active};
    `;
  }


  const [err, result] = await to(db.any(query));

  // An error occurred locally attempting to send the query
  // or an error ocurred in the database and it sent a response
  if (err || result.severity === 'ERROR') {
    throw err;
  }

  return result;
}

module.exports = mu;