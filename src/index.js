const http = require('http');
const express = require('express');
const chalk = require('chalk');
const bodyParser = require('body-parser');
const { Log, Config, logServer } = require('./config');

//-------------------------------------------------------------------
// DATABASE CONNECTION FILE
//-------------------------------------------------------------------
const connect = require('./database/connection');
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// DATABASE MODEL FILES
//-------------------------------------------------------------------
const { Product } = require('./database/models/Product');
const { User } = require('./database/models/User');
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// ALL ROUTER FILES IMPORT
//-------------------------------------------------------------------
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// MAIN APP INSTANCE HERE
//-------------------------------------------------------------------
const app = express();
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// LOADING ENVIRONMENT CONFIGURATION DATA
//-------------------------------------------------------------------
const PORT = Config.server.PORT;
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// APP'S MIDDLEWARES HERE
//-------------------------------------------------------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// ALL ROUTES HERE
//-------------------------------------------------------------------
app.use('/api/user', userRoutes); // User Routes
app.use('/api/product', productRoutes); // Product Routes
app.use('/api/auth', authRoutes); // Authentication Routes
app.use('/api/cart', cartRoutes); // Cart Routes
//-------------------------------------------------------------------

//-------------------------------------------------------------------
// STARTING THE APP SERVER ON PORT 3000 | 5000
// LISTEN'S TO 3000 IF IN PRODUCTION ELSE 5000 WHILE IN DEVELOPMENT
//-------------------------------------------------------------------
const server = http.createServer(app);
server.listen(PORT, () => {
   connect(); // Database connection
   logServer(server);
});
//-------------------------------------------------------------------