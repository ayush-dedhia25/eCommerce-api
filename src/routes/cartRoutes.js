const express = require("express");
const CartController = require("../controllers/cartController");
const verifyJWT = require("../middlewares/verifyJWT");

// Router
const router = express.Router();

// Controller Class
const CC = new CartController();

// GET ROUTES
router.get("/add/:name", verifyJWT, CC.addProduct);
router.get("/rem/:prodId", verifyJWT, CC.removeProduct);

module.exports = router;