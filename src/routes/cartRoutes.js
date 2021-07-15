const express = require("express");
const CartController = require("../controllers/cartController");
const verifyJWT = require("../middlewares/verifyJWT");

const router = express.Router(); // Router
const CC = new CartController(); // Controller Class

//---------------------------------------------------
// ROUTES FOR CART HANDLING
//---------------------------------------------------
router.get("/add/:name", verifyJWT, CC.addProduct);
router.get("/rem/:prodId", verifyJWT, CC.removeProduct);
//---------------------------------------------------

module.exports = router;