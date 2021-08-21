const router = require('express').Router();
const CartController = require('../controllers/cartController');
const verifyJWT = require('../middlewares/verifyJWT');

//------------------------------------------------------------------
// ROUTES FOR CART HANDLING
//------------------------------------------------------------------
router.get('/add/:name', verifyJWT, CartController.addProduct);
router.get('/rem/:prodId', verifyJWT, CartController.removeProduct);
//------------------------------------------------------------------

module.exports = router;