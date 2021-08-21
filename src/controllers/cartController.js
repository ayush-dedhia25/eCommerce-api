const { Product } = require('../database/models/Product');
const { User } = require('../database/models/User');
const { Log } = require('../config');
const AvailableTypes = require('../Types');

//--------------------------------------------------------------
// Business Logic For Cart Functionality
//--------------------------------------------------------------
// Add item to cart functionality.
const addProductToCart = async (req, res) => {
   const prodname = req.params.name;
   const { email, password } = req.user;
   
   try {
      const product = await Product.findOne({ name: prodname });
      // Adding Product to Cart
      if (!product) {
         return res.status(404).send('Product not found!');
      }
      
      const user = await User.findOneAndUpdate(
         { email, password },
         {
            $push: { cart: product }
         },
         { new: true }
      );
      
      return res.status(200).json({
         success: true,
         message: 'Product added to cart!',
         user
      });
   }
   catch (e) {
      Log.data(e);
      return res.status(404).json({
         success: false,
         message: 'Product not found!'
      });
   }
}

// Remove item from cart functionality.
const removeProductFromCart = async (req, res) => {
   const { email, password } = req.user;
   try {
      // Remove a product from the cart!
      const userCart = await User.findOneAndUpdate(
         { email, password },
         {
            $pull: {
               cart: { _id: req.params.productId }
            }
         },
         { new: true }
      );
      return res.status(200).json(userCart);
   }
   catch (e) {
      Log.data(e);
      return res.status(404).json({
         success: false,
         message: 'Product not found!'
      });
   }
}
//--------------------------------------------------------------

module.exports = {
   addProductToCart,
   removeProductFromCart
}