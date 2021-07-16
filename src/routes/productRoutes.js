const express = require("express");
const ProductController = require("../controllers/productController");

const router = express.Router();    // Router
const PC = new ProductController(); // Controller Class

//---------------------------------------------------
// ROUTES FOR PRODUCTS MANAGEMENT
//---------------------------------------------------
router.get("/", PC.fetchAll);
router.get("/find/:productId", PC.fetchOne);
router.post("/create", PC.addOne);
router.delete("/delete/:productId", PC.deleteOne);
router.put("/update", PC.updateOne);

//---------------------------------------------------

module.exports = router;
