const { User } = require('../database/models/User');

//---------------------------------------------------
// Business Logic For User Management
//---------------------------------------------------
// Fetch all users.
const getUsers = async (req, res) => {
   try {
      const users = await User.find();
      return res.status(200).json(users);
   }
   catch (e) {
      return res.status(500).json(e);
   }
}

// Fetch a single user by its id.
const getUser = async (req, res) => {
   const userID = req.params.id;
   try {
      const user = await User.findById(userID);
      return res.status(200).json(user);
   }
   catch (e) {
      return res.status(500).json(e);
   }
}

// Create a new user.
const createUser = async (req, res) => {
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
const deleteUser = async (req, res) => {
   const id = req.params.id;
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
const updateUser = async (req, res) => {
   const id = req.params.id;
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
//---------------------------------------------------

module.exports = {
   getUsers,
   getUser,
   createUser,
   updateUser,
   deleteUser
}