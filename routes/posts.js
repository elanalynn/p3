const express = require('express');
const router = express.Router();
const api = require('../db/posts');

router.get('/', function(req, res, next) {
  api.getPosts().then(posts => {
    res.send(posts);
  });
});

module.exports = router;
