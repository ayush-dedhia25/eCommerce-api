const router = require('express').Router();
const AuthController = require('../controllers/authController');

//--------------------------------------------------------------
// ROUTES FOR AUTHENTICATION
//--------------------------------------------------------------
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
//--------------------------------------------------------------

module.exports = router;