const jwt = require("jsonwebtoken");
require("dotenv").config();

//---------------------------------------------------
// Middleware Function To Verify JWT Token
//---------------------------------------------------
function verifyJWT(req, res, next) {
   const authHeaders = req.headers.authorization;
   const token = authHeaders && authHeaders.split(" ")[1];

   if (token == null) {
      return res.status(401).json({
         success: false,
         message: "Authorization failed! Try again"
      });
   }

   jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
      if (err) {
         return res.status(401).json({
            success: false,
            message: "Authorization expired!"
         });
      }
      req.user = user;
      next();
   });
}
//---------------------------------------------------

module.exports = verifyJWT;