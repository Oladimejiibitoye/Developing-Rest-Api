const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

//Get /feed/posts
router.get('/posts', feedController.getPosts);

//Post /feed/post
router.post('/posts', feedController.createPost);

module.exports = router;