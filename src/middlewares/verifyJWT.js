const JWT = require('jsonwebtoken');
const { Config } = require('../config');

//--------------------------------------------------------------
// Middleware To Verify JWT Token OR Refresh Token
//--------------------------------------------------------------
function verifyJWT(req, res, next) {
   const authHeaders = req.headers.authorization;
   const token = authHeaders && authHeaders.split(' ')[1];
   if (token == null) {
      return res.status(401).json({
         success: false,
         message: 'Authorization failed! Try again'
      });
   }
   JWT.verify(token, Config.jwt.SECRET, (err, user) => {
      if (err) {
         return res.status(401).json({
            success: false,
            message: 'Authorization expired or invalid!'
         });
      }
      req.user = user;
      next();
   });
}
//--------------------------------------------------------------

module.exports = verifyJWT;