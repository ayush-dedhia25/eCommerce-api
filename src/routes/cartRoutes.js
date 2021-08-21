const router = require('express').Router();
const CartController = require('../controllers/cartController');
const verifyJWT = require('../middlewares/verifyJWT');

//---------------------------------------------------------------------------
// ROUTES FOR CART HANDLING
//---------------------------------------------------------------------------
router.get('/add/:name', verifyJWT, CartController.addProductToCart);
router.get('/rem/:productId', verifyJWT, CartController.removeProductFromCart);
//---------------------------------------------------------------------------

module.exports = router;