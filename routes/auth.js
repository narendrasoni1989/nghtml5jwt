var express = require('express');
var router = express.Router();
var authController = require('../app/authorization/controllers/AuthController.js');

router.post('/signup',authController.localSignup);
router.post('/login',authController.localLogin);
router.post('/logout',authController.logout);
router.delete('/signup',authController.deleteUser);

router.get('/test',authController.testGet);
router.post('/test',authController.testPost);


module.exports = router;
