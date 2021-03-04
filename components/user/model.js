let mu = {};

const usersArr = [
  {
    id: 1,
    name: "bob"
  },
  {
    id: 2,
    name: "jane"
  },
  {
    id: 3,
    name: "timmy"
  },
];

// with this func we can make a call to the database
// and expect a response, at this layer we only need to worry
// with making calls to the database no need to modify or clean
// up the result once retrieved.  
mu.getByID = (idToFind) => {


  console.log("in model!")
  user = usersArr.find(user => user.id == idToFind);

  return user;
}

module.exports = mu;