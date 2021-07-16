/*
* @Package eCommerce-api
* @Version 1.0.0
* @Author Ayush Dedhia <ayushdedhia25@gmail.com>
*/
const express = require("express");
const chalk = require("chalk");
const bodyParser = require("body-parser");
require("dotenv").config();

//-------------------------------------------------
// DATABASE CONNECTION FILE
//-------------------------------------------------
const connect = require("./database/connection");
// -------------------------------------------------

//-------------------------------------------------
// DATABASE MODEL FILES
//-------------------------------------------------
const { Product } = require("./database/models/Product");
const { User } = require("./database/models/User");
//-------------------------------------------------

//-------------------------------------------------
// ALL ROUTER FILES IMPORT
//-------------------------------------------------
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
//-------------------------------------------------

//-------------------------------------------------
// MAIN APP INSTANCE HERE
//-------------------------------------------------
const app = express();
//-------------------------------------------------

//-------------------------------------------------
// LOADING ENVIRONMENT CONFIGURATION DATA
//-------------------------------------------------
const PORT = process.env.PORT || 5000;
//-------------------------------------------------

//-------------------------------------------------
// APP'S MIDDLEWARES HERE
//-------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//-------------------------------------------------

//-------------------------------------------------
// ALL ROUTES HERE
//-------------------------------------------------
app.use("/api/user", userRoutes); // User Routes
app.use("/api/product", productRoutes); // Product Routes
app.use("/api/auth", authRoutes); // Authentication Routes
app.use("/api/cart", cartRoutes); // Cart Routes
//-------------------------------------------------

//-------------------------------------------------
// STARTING THE APP SERVER ON PORT 3000 | 5000
// LISTEN'S TO 3000 IF IN PRODUCTION ELSE 5000 WHILE IN DEVELOPMENT
//-------------------------------------------------
app.listen(PORT, () => {
   console.log(chalk.cyan(`Server up and running on port ${PORT}`));
   connect(); // Database connection
});
//-------------------------------------------------