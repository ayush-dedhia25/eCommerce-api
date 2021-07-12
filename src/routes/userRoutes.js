const express = require("express");
const UserController = require("../controllers/userController");

// Router
const router = express.Router();

// Controller Class
const UC = new UserController();

// GET ROUTES
router.get("/", UC.fetchAll);
router.get("/:id", UC.fetchOne);

// POST ROUTES
router.post("/create", UC.addOne);

// DELETE ROUTES
router.delete("/remove/:userId", UC.deleteOne);

// UPDATE ROUTES
router.put("/edit/:userId", UC.updateOne);

module.exports = router;