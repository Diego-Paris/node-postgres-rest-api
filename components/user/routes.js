const express = require('express');
const router = express.Router();

const Users = require('./controller');
const to = require('../../utils').to;

router.get('/', async (req, res, next) => {

  const [err, result] = await to(Users.getAll());

  if (err) {
    return next(err);
  }
  
  res.json({
    message: "Retrieved all users!",
    result
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