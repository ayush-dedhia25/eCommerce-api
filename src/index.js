const express = require("express");
const chalk = require("chalk");
const bodyParser = require("body-parser");
require("dotenv").config();

const connect = require("./database/connection");

const { Product } = require("./database/models/Product");
const { User } = require("./database/models/User");

const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productRoutes");

/*
* Chalk Settings & Utilities
* @Blue for warning message
* @Cyan for normal logging message
* @Red for error message
*/
const warning = chalk.blue;
const log = chalk.cyan;
const error = chalk.red;


/*
* This is the main `App` of this project!
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
app.use(bodyParser.urlencoded({ extended: false }));


/*
* All Routes are described here...
*/
// User Routes...
app.use("/api/user", userRoutes);
// Product Routes...
app.use("/api/product", productRoutes);


/*
* Listening to the port to start the server
* @port 5000
* @host Localhost
* @url http://localhost:5000/
*/
app.listen(PORT, () => {
	console.log(log(`Server up and running on port ${PORT}`));
	connect();
});