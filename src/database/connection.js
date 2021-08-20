const mongoose = require('mongoose');
const chalk = require('chalk');
const { Config, Log } = require('../config');

const db = Config.database.DATABASE;
const dbName = Config.database.DBNAME;
const dbHost = Config.database.HOST;
const dbPort = Config.database.PORT;

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
      Log.log('(::::: Database Connection Active 🌟 :::::)');
   }
   catch (error) {
      Log.error(
         '(::::: 🚨 ERROR 🚨 :::::)\n' +
         '1. Make sure that your connection to MongoDB is ON!\n' +
         '2. Make sure you have configured database properly'
      );
   }
}
//------------------------------------------------------------------------------

module.exports = connect;