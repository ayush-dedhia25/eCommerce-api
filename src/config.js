const chalk = require('chalk');
require('dotenv').config();

//------------------------------------------------------------------------------------
// Application Config Settings
//------------------------------------------------------------------------------------
const Config = {
   database: {
      DATABASE : process.env.DB          || 'mongodb',
      HOST     : process.env.DB_HOST     || 'localhost',
      PORT     : process.env.DB_PORT     || 27017,
      DBNAME   : process.env.DB_NAME     || 'example',
      USERNAME : process.env.DB_USER     || '',
      PASSWORD : process.env.DB_PASSWORD || ''
   },
   
   server: {
      HOST : process.env.SERVER_HOST || '127.0.0.1',
      PORT : process.env.SERVER_PORT || 8080
   },
   
   jwt: {
      SECRET        : process.env.JWT_SECRET        || 'strongSecretHere123',
      ISSUER        : 'ayushproductions.com',
      EXPIRES_IN    : process.env.JWT_EXPIRY_TIME   || 300,
      REFRESH_TOKEN : process.env.JWT_REFRESH_TOKEN || 'reallyStrongRefesh123'
   }
}
//------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------
// Custom Logging Service
//------------------------------------------------------------------------------------
class Logger {
   static async log(namespace, message) {
      (typeof message !== 'object')
      ? console.log(chalk`{bold.cyan [${namespace}]} {bold [INFO]} ${message}`)
      : console.log(chalk`{bold.cyan [${namespace}]} {bold [INFO]}`, message);
   }
   
   static async warn(namespace, message) {
      (typeof message !== 'object')
      ? console.log(chalk`{bold.cyan [${namespace}]} {bold.yellow [WARN]} ${message}`)
      : console.log(chalk`{bold.cyan [${namespace}]} {bold.yellow [WARN]}`, message);
   }
   
   static async error(namespace, error) {
      (typeof message !== 'object')
      ? console.log(chalk`{bold.cyan [${namespace}]} {bold.red [ERROR]} ${error}`)
      : console.log(chalk`{bold.cyan [${namespace}]} {bold.red [ERROR]}`, error);
   }
}
//------------------------------------------------------------------------------------

async function logServer() {
   console.log(chalk`        {bold.cyan +-------------------------------------------+}`);
   console.log(chalk`        {bold.cyan |}           {bold EXPRESS SERVER STARTED}          {bold.cyan |}`);
   console.log(chalk`        {bold.cyan |}       ******************************      {bold.cyan |}`);
   console.log(chalk`        {bold.cyan |}   {bold.green Server:} {yellow.underline http://${Config.server.HOST}:${Config.server.PORT}} ......... {bold.cyan |}`);
   console.log(chalk`        {bold.cyan |} {bold.green Database:} {yellow ${Config.database.DBNAME}} ..................... {bold.cyan |}`);
   console.log(chalk`        {bold.cyan +-------------------------------------------+}`);
}

module.exports = {
   Config,
   logServer,
   Log: Logger
}