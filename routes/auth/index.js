const router = require('express').Router();
const userController = require('../../controllers/UserController');
const passport = require('../../passport');


router.get('user', userController.getUser)
router.post('/login', userController.auth, passport.authenticate('local'), userController.authenticate);
router.post('/logout', userController.logout);
router.post('/signup', userController.register);

module.exports = router;