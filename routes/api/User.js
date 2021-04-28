const router = require('express').Router;
const userController = require('../../controllers/UserController');

router.route('/login')
    .post(userController.addUser)
    .post(userController.changePasswordUser)
    .delete(userController.deleteUser)

module.exports = router;