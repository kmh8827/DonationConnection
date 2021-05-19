const router = require('express').Router();
const userController = require('../../controllers/UserController');
const passport = require('../../passport');

// Run on start up to see if user is still logged in
router.get('/user', userController.getUser)
// Used to log a user in
router.post('/login', userController.auth, passport.authenticate('local'), userController.authenticate);
// Used to log a user out
router.post('/logout', userController.logout);
// Used to create a new User
router.post('/signup', userController.register);

module.exports = router;