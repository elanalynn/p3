const express = require('express');
const router = express.Router();
const api = require('../db/illustrations');

router.get('/', function(req, res, next) {
  api.getIllustrations().then(illustrations => {
    res.send(illustrations);
  });
});

module.exports = router;