const express = require('express');
const router = express.Router();
const passport = requrie('../../passport');
const userController = require('../../controllers/UserController');

router.get('user', userController.getUser)
router.post('/login', userController.auth, passport.authenticate('local'), userController.authenticate);
router.post('/logout', userController.logout);
router.post('/signup', userController.register);

module.exports = router;