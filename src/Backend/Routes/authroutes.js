const { Router } = require('express');
const authController = require('../Controllers/AuthController');
const router = Router();


router.post('/login',authController.login_post);

module.exports = router;