const { Product } = require('../database/models/Product');

//-----------------------------------------------------------------------------
// Business Logic For Managing Products
//-----------------------------------------------------------------------------
// Fetching all the `Products` from the database.
module.exports.getProducts = async (req, res) => {
   try {
      const products = await Product.find();
      return res.status(200).json(products);
   }
   catch (e) {
      return res.status(500).json(e);
   }
}

// Fetching a single `Product` from the database.
// Based on `_id` field.
module.exports.getProduct = async (req, res) => {
   const productID = req.params.productId;
   try {
      const product = await Product.findOne({ _id: productID });
      return res.status(200).json(product);
   }
   catch (e) {
      return res.status(500).json(e);
   }
}

// Adding a new `Product` in the database.
module.exports.addProduct = async (req, res) => {
   try {
      const product = await new Product(req.body);
      await product.save();
      return res.status(200).json(product);
   }
   catch (e) {
      return res.status(500).json({
         _message: e._message,
         name: e.name,
         message: e.message
      });
   }
}

// Deleting a single `Product` from the database.
// Based on `_id` field.
module.exports.deleteProduct = async (req, res) => {
   const productID = req.params.productId;
   try {
      const product = await Product.findByIdAndDelete(productID);
      return res.status(200).json(product);
   }
   catch (e) {
      return res.status(500).json({
         _message: e._message,
         name: e.name,
         message: e.message
      });
   }
}

// Updating a single `Product` from the database.
module.exports.updateProduct = async (req, res) => {
   const productID = req.params.productId;
   try {
      const product = await Product.findOneAndUpdate(
         { _id: productID }, // Condition
         req.body,           // Changes
         { new: true }       // Whether to return old record or updated record
      );
      return res.status(200).json(product);
   }
   catch (e) {
      return res.status(500).json({
         _message: e._message,
         name: e.name,
         message: e.message
      });
   }
}
//-----------------------------------------------------------------------------