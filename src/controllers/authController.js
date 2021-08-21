const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { User } = require('../database/models/User');
const { Config } = require("../config");

//--------------------------------------------------------------------
// Business Logic For Authentication
//--------------------------------------------------------------------
// User login functionality.
module.exports.login = async (req, res) => {
   const { email, password } = req.body;
   if (!email || !password) {
      return res.status(404).json({
         success: false,
         message: 'Please provide authentication details!'
      });
   }
   
   try {
      const user = await User.findOne({ email });
      const isMatched = await bcrypt.compare(password, user.password);
      
      if (!isMatched) {
         return res.status(404).json({
            success: false,
            message: 'Invalid username or password!'
         });
      }
      else {
         const token = jwt.sign(
            {
               email: user.email,
               password: user.password
            },
            Config.jwt.SECRET
         );
         
         return res.status(200).json({
            token,
            email: user.email,
            password: user.password
         });
      }
   }
   catch (e) {
      Log.data(e);
      return res.status(404).json({
         ok: false,
         message: 'User not found!'
      });
   }
}

// User logout functionality.
module.exports.logout = async (req, res) => {
   try {}
   catch (e) {
      return res.status().json({
         success: false,
         message: 'Couldn\'t logout! Please try again!'
      });
   }
}
//--------------------------------------------------------------------