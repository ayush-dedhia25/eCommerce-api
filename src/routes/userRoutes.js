const express = require("express");
const UserController = require("../controllers/userController");
const verifyJWT = require("../middlewares/verifyJWT");

// Router
const router = express.Router();

// Controller Class
const UC = new UserController();

// GET ROUTES
router.get("/", verifyJWT, UC.fetchAll);
router.get("/:id", verifyJWT, UC.fetchOne);

// POST ROUTES
router.post("/create", verifyJWT, UC.addOne);

// DELETE ROUTES
router.delete("/remove/:userId", verifyJWT, UC.deleteOne);

// UPDATE ROUTES
router.put("/edit/:userId", verifyJWT, UC.updateOne);

module.exports = router;