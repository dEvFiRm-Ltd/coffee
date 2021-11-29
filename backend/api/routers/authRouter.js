const router = require('express').Router();
const { userSignupController, userLoingController } = require('../controllers/authController');

router.post('/signup', userSignupController);
router.post('/login', userLoingController);

module.exports = router;
