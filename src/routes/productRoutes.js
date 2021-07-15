const express = require("express");
const ProductController = require("../controllers/productController");

// Router
const router = express.Router();

// Controller Class
const PC = new ProductController();

// GET ROUTES
router.get("/", PC.fetchAll);
router.get("/find/:productId", PC.fetchOne);

// POST ROUTES
router.post("/create", PC.addOne);

// DELETE ROUTES
router.delete("/delete/:productId", PC.deleteOne);

// UPDATE ROUTES
router.put("/update", PC.updateOne);


module.exports = router;