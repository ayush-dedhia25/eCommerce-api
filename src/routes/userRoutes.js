const router = require('express').Router();
const UserController = require('../controllers/userController');
const verifyJWT = require('../middlewares/verifyJWT');

//---------------------------------------------------------------------
// ROUTES FOR USER MANAGEMENT
//---------------------------------------------------------------------
router.get('/', verifyJWT, UserController.getUsers);
router.get('/:id', verifyJWT, UserController.getUser);
router.put('/:id', verifyJWT, UserController.updateUser);
router.post('/', UserController.createUser);
router.delete('/:id', verifyJWT, UserController.deleteUser);
//---------------------------------------------------------------------

module.exports = router;