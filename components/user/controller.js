const User = require('./model');
const to = require('../../utils').to;

let mu = {}

// with this func we can get unfiltered data from the DB
// clean it up, modify, add, or reduce to it, whichever
// is needed for the function
mu.getByID = async (idToFind) => {
  
  // controller makes a call to the DB
  // with this we don't have to worry about the logic behind 
  // database implementation, simply a call to the database layer
  // and get back an unfiltered user entity if it exists
  // make a call to the database layer to retrieve all users
  const [err, result] = await to(User.getByID(idToFind));

  if (err) {
    throw err;
  }

  let filtered = {
      id: result.id,
      username: result.username,
      email: result.email,
      active: result.active,
  }

  return filtered;
};

mu.getAll = async (filters) => {

  // make a call to the database layer to retrieve all users
  const [err, result] = await to(User.getAll(filters));

  if (err) {
    throw err;
  }

  let filtered = result.map(obj => {
    return {
      id: obj.id,
      username: obj.username,
      email: obj.email,
      active: obj.active,
    }
  });

  return filtered;
}

module.exports = mu;