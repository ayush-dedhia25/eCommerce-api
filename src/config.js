require("dotenv").config();

//-------------------------------------------------------------
// Application Config Settings
//-------------------------------------------------------------
const Config = {
   database: {
      DATABASE: process.env.DB          || 'mongodb',
      HOST:     process.env.DB_HOST     || 'localhost',
      PORT:     process.env.DB_PORT     || 27017,
      USERNAME: process.env.DB_USER     || '',
      PASSWORD: process.env.DB_PASSWORD || ''
   },
   
   server: {
      PORT: process.env.SERVER_PORT || 8080,
      HOST: process.env.SERVER_HOST || '127.0.0.1'
   },
   
   jwt: {
      SECRET: process.env.JWT_SECRET || 'strongSecretHere123'
   }
}
//-------------------------------------------------------------

//-------------------------------------------------------------
// Custom Logging Service
//-------------------------------------------------------------
class Logger {
   static async log(namespace, message) {
      (typeof message === 'object')
      ? console.log(`[${namespace}] [LOG]`, message)
      : console.log(`[${namespace}] [LOG] ${message}`);
   }
   
   static async warn(namespace, message) {
      console.log(`[${namespace}] [WARN] ${message}`);
   }
   
   static async error(namespace, message) {
      console.log(`[${namespace}] [ERROR] ${message}`);
   }
}
//-------------------------------------------------------------

module.exports = {
   Config,
   Log: Logger
}