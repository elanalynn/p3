const express = require('express');
const router = express.Router();
const messages = require('./messages');
const posts = require('./posts');

router.use('/messages', messages);
router.use('/posts', posts);

router.get('/', function(req, res, next) {
  res.send('TODO: Documentation');
});

module.exports = router;
