const utils = require("../utils");

function validateUserQueryStrings(req, res, next) {
  // List all valid queries
  const validQueries = ["active"];

  let queries = req.query;

  // If queries is empty proceed as normal
  let queriesIsEmpty = utils.isEmpty(queries);
  if (queriesIsEmpty) {
    return next();
  }

  // If it is not empty, then validate
  for (const query in queries) {
    // If a query passed is not valid then deny request
    if (!validQueries.includes(query)) {
      return res.status(422).json({
        message: `[ ${query} ] is not a valid query.`,
      });
    }

    // get the entry in obj with the key
    let queryVal = queries[query];

    // Check that active is a boolean represented string
    if (query === "active") {
      if (queryVal === "true") {
        req.query.active = true;
      } else if (queryVal === "false") {
        req.query.active = false;
      } else {
        return res.status(422).json({
          message: `[ ${query} ] query must be 'true' or 'false'.`,
        });
      }
      continue;
    }

    // Check that createdAt is a valid UTC timezone date
    
  }

  next();
}

module.exports = {
  validateUserQueryStrings,
};
