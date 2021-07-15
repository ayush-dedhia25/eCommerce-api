const express = require("express");
const chalk = require("chalk");
const bodyParser = require("body-parser");
require("dotenv").config();

// DB Connection
const connect = require("./database/connection");
// Models
const {
  Product
} = require("./database/models/Product");
const {
  User
} = require("./database/models/User");
// Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");


/*
* This is the main `App` of this project!
* @app is the instance of Express framework
* It is also the entry point of the API
*/
const app = express();


/*
* Loading Environment Configuration Data
*/
const PORT = process.env.PORT || 5000;


/*
* This are the mandatory middlewares for this App
* BodyParser Middleware to parse incoming req object
*/
// Don't forget to pass headers of `Content-Type: application/json`
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));


/*
* All Routes are described here...
*/
app.use("/api/user", userRoutes);       // User Routes
app.use("/api/product", productRoutes); // Product Routes
app.use("/api/auth", authRoutes);       // Authentication Routes
app.use("/api/cart", cartRoutes);       // Cart Routes


/*
* Listening to the port to start the server
* @port `PORT`
* @host Localhost
* @url http://localhost:5000/
*/
app.listen(PORT, () => {
  console.log(chalk.cyan(`Server up and running on port ${PORT}`));
  connect(); // Database connection
});