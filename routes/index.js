const express = require('express');
const router = express.Router();
const posts = require('./posts');

router.use('/posts', posts);

router.get('/', function(req, res, next) {
  res.send('TODO: Documentation');
});

module.exports = router;
