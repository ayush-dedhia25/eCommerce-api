const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../database/models/User');
const { Config, Log } = require('../config');
const signRefreshToken = require('../helpers/JwtHelper');

//--------------------------------------------------------------------
// Business Logic For Authentication
//--------------------------------------------------------------------
// User login functionality.
const login = async (req, res) => {
   const { email, password } = req.body;
   
   if (!email || !password) {
      res.status(404).json({
         success : false,
         message : 'Please provide authentication details!'
      });
      return;
   }
   
   try {
      const user = await User.findOne({ email });
      const isMatched = await bcrypt.compare(password, user.password);
      
      if (!isMatched) {
         return res.status(404).json({
            success : false,
            message : 'Invalid username or password!'
         });
      }
      else {
         const token = jwt.sign(
            {
               email    : user.email,
               password : user.password
            },
            Config.jwt.SECRET
         );
         
         const refreshToken = await signRefreshToken(user._id.toString());
         
         res.status(200).json({
            token,
            refreshToken,
            email    : user.email,
            password : user.password
         });
         return;
      }
   }
   catch (e) {
      Log.error('AuthService', e);
      res.status(404).json({
         ok      : false,
         message : 'User not found!'
      });
      return;
   }
}
//--------------------------------------------------------------------

module.exports = {
   login
}