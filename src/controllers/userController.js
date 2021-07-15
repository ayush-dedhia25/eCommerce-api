const { User } = require("../database/models/User");

class UserController {
	constructor() {}
	
	// Fetching all the `Users` from the database
	async fetchAll(req, res) {
		try {
			const users = await User.find();
			return res.status(200).json(users);
		}
		catch (e) {
			return res.status(500).json(e);
		}
	}
	
	// Fetching a `User` from the database
	// Based on `id` field
	async fetchOne(req, res) {
		const userID = req.params.userId;
		
		try {
			const user = await User.findById(userID);
			return res.status(200).json(user);
		}
		catch (e) {
			return res.status(500).json(e);
		}
	}
	
	// Adding a new `User` in the database
	// With `req.body` Object
	async addOne(req, res) {
		console.log(req.body);
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
	
	// Deleting a `User` from the database
	async deleteOne(req, res) {
		const id = req.params.userId;
		
		try {
			const user = await User.findByIdAndDelete(id);
			return res.status(204).json({
				success: true,
				message: "User Deleted!"
			});
		}
		catch (e) {
			return res.status(500).json(e);
		}
	}
	
	// Updating a `User` from the database
	async updateOne(req, res) {
		const id = req.params.userId;
		
		try {
			const user = await User.findByIdAndUpdate(
				id,			  // Condition
				req.body,	  // Changes
				{ new: true } // Return updated user
			);
			return res.status(200).json(user);
		}
		catch (e) {
			return res.status(500).json(e);
		}
	}
}

module.exports = UserController;