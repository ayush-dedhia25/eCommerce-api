const router = require('express').Router();
const AuthController = require('../controllers/authController');

//--------------------------------------------------------------
// ROUTES FOR AUTHENTICATION
//--------------------------------------------------------------
router.post('/login', AuthController.login);
//--------------------------------------------------------------

module.exports = router;