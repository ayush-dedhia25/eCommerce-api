const router = require('express').Router();
const ProductController = require('../controllers/productController');

//--------------------------------------------------------------------
// ROUTES FOR PRODUCTS MANAGEMENT
//--------------------------------------------------------------------
router.get('/', ProductController.getProducts);
router.get('/find/:productId', ProductController.getProduct);
router.post('/create', ProductController.addOne);
router.delete('/delete/:productId', ProductController.deleteProduct);
router.put('/update', ProductController.updateProduct);
//--------------------------------------------------------------------

module.exports = router;