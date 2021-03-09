const express = require("express");
const router = express.Router();

const Users = require("./controller");
const {
  validateUserQueryStrings,
} = require("../../middlewares/userDataValidator");
const to = require("../../utils").to;

router.get("/", validateUserQueryStrings, async (req, res, next) => {
  // take obj containing filters to search by
  let filters = req.query;

  const [err, result] = await to(Users.getAll(filters));

  if (err) {
    return next(err);
  }

  res.json({
    message: "Retrieved all users!",
    result,
  });
});

router.get("/:id", async (req, res, next) => {
  // takes in the id value from parameters
  let idToFind = req.params.id;

  // makes a call to the controller class
  // with this we don't have to worry about business logic
  // or how the data is filtered and manipulated
  const [err, result] = await to(Users.getByID(idToFind));

  if (err && err.message === "User is not found") {
    return res.status(404).json({
      message: err.message,
    });
  }

  if (err) {
    return next(err);
  }

  res.json({
    message: "Retrieved user!",
    result,
  });
});

router.post("/", async (req, res, next) => {
  res.json({
    message: "Made to the end of the rabbit hole"
  });
});

module.exports = router;