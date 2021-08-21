const { User } = require('../database/models/User');

//------------------------------------------------------
// Business Logic For User Management
//------------------------------------------------------
// Fetch all users.
module.exports.fetchAll = async (req, res) => {
   try {
      const users = await User.find();
      return res.status(200).json(users);
   }
   catch (e) {
      return res.status(500).json(e);
   }
}

// Fetch a single user by its id.
module.exports.fetchOne = async (req, res) => {
   const userID = req.params.userId;
   try {
      const user = await User.findById(userID);
      return res.status(200).json(user);
   }
   catch (e) {
      return res.status(500).json(e);
   }
}

// Create a new user.
module.exports.addOne = async (req, res) => {
   try {
      const user = new User(req.body);
      await user.save();
      return res.status(200).json(user);
   }
   catch (e) {
      return res.status(500).json({
         _message: e._message,
         name: e.name,
         message: e.message
      });
   }
}

// Delete a user!
module.exports.deleteOne = async (req, res) => {
   const id = req.params.userId;
   try {
      const user = await User.findByIdAndDelete(id);
      return res.status(204).json({
         success: true,
         message: 'User Deleted!'
      });
   }
   catch (e) {
      return res.status(500).json(e);
   }
}

// Update a user.
module.exports.updateOne = async (req, res) => {
   const id = req.params.userId;
   try {
      const user = await User.findByIdAndUpdate(
         id,           // Condition
         req.body,     // Changes
         { new: true } // Return updated user
      );
      return res.status(200).json(user);
   }
   catch (e) {
      return res.status(500).json(e);
   }
}