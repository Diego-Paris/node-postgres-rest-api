const express = require('express');

const user = require('./components/user/routes')

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    message: 'API Version 1 - 👋🌎🌍🌏'
  });
});

router.use('/users', user);

module.exports = router;
