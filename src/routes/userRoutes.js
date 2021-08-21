const router = require('express').Router();
const UserController = require('../controllers/userController');
const verifyJWT = require('../middlewares/verifyJWT');

//---------------------------------------------------------------------
// ROUTES FOR USER MANAGEMENT
//---------------------------------------------------------------------
router.get('/', verifyJWT, UserController.fetchAll);
router.get('/:id', verifyJWT, UserController.fetchOne);
router.put('/edit/:userId', verifyJWT, UserController.updateOne);
router.post('/create', UserController.addOne);
router.delete('/remove/:userId', verifyJWT, UserController.deleteOne);
//---------------------------------------------------------------------

module.exports = router;