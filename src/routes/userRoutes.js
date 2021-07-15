const express = require("express");
const UserController = require("../controllers/userController");
const verifyJWT = require("../middlewares/verifyJWT");

const router = express.Router(); // Router
const UC = new UserController(); // Controller Class

//---------------------------------------------------
// ROUTES FOR USER MANAGEMENT
//---------------------------------------------------
router.get("/", verifyJWT, UC.fetchAll);
router.get("/:id", verifyJWT, UC.fetchOne);
router.put("/edit/:userId", verifyJWT, UC.updateOne);
router.post("/create", UC.addOne);
router.delete("/remove/:userId", verifyJWT, UC.deleteOne);
//---------------------------------------------------

module.exports = router;