const express = require('express');
const router = express.Router();
const api = require('../db/projects');

router.get('/', function(req, res, next) {
  api.getProjects().then(projects => {
    res.send(projects);
  });
});

module.exports = router;