const express = require('express');
const router = express.Router();
const api = require('../db/posts');

router.get('/', (req, res, next) => {
  api.getPosts().then(posts => {
    res.send(posts);
  });
});

router.get('/:id', (req, res, next) => {
  api.getPost(req.params.id).then(posts => {
    res.send(posts);
  });
});

router.post('/', (req, res, next) => {
  console.log(req.body);
  api.createPost(req.body).then(id => {
    console.log('hey');
    res.send(id);
  }).catch(err => {
    console.log(err);
  });
});

router.patch('/:id', (req, res, next) => {
  api.editPost(req.params.id, req.body).then(id => {
    res.send(id);
  });
});

router.delete('/:id', (req, res, next) => {
  api.deletePost(req.params.id).then(id => {
    res.send(id);
  });
});

module.exports = router;
