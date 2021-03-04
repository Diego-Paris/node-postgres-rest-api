const express = require('express');
const router = express.Router();

const Users = require('./controller');

router.get('/', (req, res) => {
  res.json({
    message: "In user!"
  });
});

router.get('/:id', (req, res) => {
  
  // takes in the id value from parameters
  let idToFind = req.params.id;

  // makes a call to the controller class
  // with this we don't have to worry about business logic
  // or how the data is filtered and manipulated
  let user = Users.getByID(idToFind);
  
  res.json(user);
});


module.exports = router;