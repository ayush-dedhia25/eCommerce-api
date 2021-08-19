const mongoose = require('mongoose');
const chalk = require('chalk');
require('dotenv').config();

const db = process.env.DB;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST;
const dbPort = process.env.DB_PORT;

const URI = `${db}://${dbHost}:${dbPort}/${dbName}`;

//------------------------------------------------------------------------------
// Connection Function To Connect With Database
//------------------------------------------------------------------------------
async function connect() {
   const options = {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true
   };

   try {
      await mongoose.connect(URI, options);
      console.log(chalk.magenta('(::::: Database Connection Active 🌟 :::::)'));
   }
   catch (error) {
      console.log(chalk.red(
         '(::::: 🚨 ERROR 🚨 :::::)\n' +
         '1. Make sure that your connection to MongoDB is ON!\n' +
         '2. Make sure you have configured database properly'
      ));
   }
}
//------------------------------------------------------------------------------

module.exports = connect;