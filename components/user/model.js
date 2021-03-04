const app = require('../../app');
const db = require('../../db-init');
const to = require('../../utils').to;

let mu = {};

// with this func we can make a call to the database
// and expect a response, at this layer we only need to worry
// with making calls to the database no need to modify or clean
// up the result once retrieved.  
mu.getByID = (idToFind) => {


  console.log("in model!")
  user = usersArr.find(user => user.id == idToFind);

  return user;
}

mu.getAll = async () => {

  let query = `
    SELECT *
    FROM users;
  `;

  const [err, result] = await to(db.any(query));

  // An error occurred locally attempting to send the query
  // or an error ocurred in the database and it sent a response
  if (err || result.severity === 'ERROR') {
    throw err;
  }

  return result;
}

module.exports = mu;