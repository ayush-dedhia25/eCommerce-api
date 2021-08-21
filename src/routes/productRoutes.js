const router = require('express').Router();
const ProductController = require('../controllers/productController');

//--------------------------------------------------------------------
// ROUTES FOR PRODUCTS MANAGEMENT
//--------------------------------------------------------------------
router.get('/', ProductController.getProducts);
router.get('/find/:productId', ProductController.getProduct);
router.put('/update', ProductController.updateProduct);
router.post('/create', ProductController.addProduct);
router.delete('/delete/:productId', ProductController.deleteProduct);
//--------------------------------------------------------------------

module.exports = router;