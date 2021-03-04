const User = require('./model');


let mu = {}

// with this func we can get unfiltered data from the DB
// clean it up, modify, add, or reduce to it, whichever
// is needed for the function
mu.getByID = (idToFind) => {
  
  // controller makes a call to the DB
  // with this we don't have to worry about the logic behind 
  // database implementation, simply a call to the database layer
  // and get back an unfiltered user entity if it exists
  user = User.getByID(idToFind);
  
  return user;


};

module.exports = mu;