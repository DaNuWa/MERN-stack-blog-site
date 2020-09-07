const { Router } = require('express');
const postController = require('../Controllers/PostController');
const router = Router();

router.get('/posts',postController.posts_get);
router.post('/posts',postController.posts_post);

module.exports = router;