const JWT = require('jsonwebtoken');
const { Config, Log } = require('../config');

//---------------------------------------------------------------------
// Signing JWT Refresh Token.
//---------------------------------------------------------------------
const signRefreshToken = (userId) => new Promise((resolve, reject) => {
   const secret = Config.jwt.REFRESH_TOKEN;
   const claims = {
      issuer    : Config.jwt.ISSUER,
      expiresIn : '1y', // Expires in 1 year
      audience  : userId
   };
   // Signing the jwt token.
   JWT.sign({}, secret, claims, (err, refreshToken) => {
      if (err) {
         Log.error('JwtHelper', err);
         reject(err);
      }
      resolve(refreshToken);
   });
});
//---------------------------------------------------------------------

module.exports = signRefreshToken;