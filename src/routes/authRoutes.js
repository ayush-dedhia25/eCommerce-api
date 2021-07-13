const express = require("express");
const AuthController = require("../controllers/authController");

const router = express.Router(); // Router Instance
const AC = new AuthController(); // Controller Instance

// POST ROUTES
router.post("/login", AC.login);

module.exports = router;