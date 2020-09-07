const { Router } = require('express');
const { requireAuth, checkUser }=require ('../Middleware/Authmiddleware')
const authController = require('../Controllers/AuthController');
const postController = require('../Controllers/PostController');

const router = Router();
router.post('admin/posts',postController.posts_post);

module.exports = router;