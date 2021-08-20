const chalk = require('chalk');
require('dotenv').config();

//------------------------------------------------------------------------------------
// Application Config Settings
//------------------------------------------------------------------------------------
const Config = {
   database: {
      DATABASE: process.env.DB          || 'mongodb',
      HOST:     process.env.DB_HOST     || 'localhost',
      PORT:     process.env.DB_PORT     || 27017,
      USERNAME: process.env.DB_USER     || '',
      PASSWORD: process.env.DB_PASSWORD || '',
      DBNAME:   process.env.DB_NAME     || 'example'
   },
   
   server: {
      HOST: process.env.SERVER_HOST || '127.0.0.1',
      PORT: process.env.SERVER_PORT || 8080
   },
   
   jwt: {
      SECRET: process.env.JWT_SECRET || 'strongSecretHere123'
   }
}
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
// Custom Logging Service
//------------------------------------------------------------------------------------
class Logger {
   static async log(namespace, message) {
      console.log(chalk`{bold.cyan [${namespace}]} {bold [INFO]} ${message}`);
   }
   
   static async warn(namespace, message) {
      console.log(chalk`{bold.cyan [${namespace}]} {bold.yellow [WARN]} ${message}`);
   }
   
   static async error(namespace, message) {
      console.log(chalk`{bold.cyan [${namespace}]} {bold.red [ERROR]} ${message}`);
   }
   
   static async data(namespace, data) {
      console.log(chalk`{bold.cyan [${namespace}] {bold.magenta [DATA]}`, data);
   }
}
//------------------------------------------------------------------------------------

async function logServer() {
   console.log(chalk`{bold.cyan +-------------------------------------------+}`);
   console.log(chalk`{bold.cyan |}           {bold EXPRESS SERVER STARTED}          {bold.cyan |}`);
   console.log(chalk`{bold.cyan |}       ******************************      {bold.cyan |}`);
   console.log(chalk`{bold.cyan |}   {bold.green Server:} {yellow.underline http://${Config.server.HOST}:${Config.server.PORT}} ......... {bold.cyan |}`);
   console.log(chalk`{bold.cyan |} {bold.green Database:} {yellow ${Config.database.DBNAME}} ..................... {bold.cyan |}`);
   console.log(chalk`{bold.cyan +-------------------------------------------+}`);
}

module.exports = {
   Config,
   logServer,
   Log: Logger
}