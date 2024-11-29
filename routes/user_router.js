const router = require('express').Router();
const userController = require('../controllers/user_controller');

// Router POST
router.post('/register', userController.register);
router.post('/signin', userController.signin);

module.exports = router;