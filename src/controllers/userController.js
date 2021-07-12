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
	
	// Fetching a single `User` from the database
	// Based on `id` field
	async fetchOne(req, res) {
		const userID = req.params.userId;
		
		try {
			const user = await User.findOne({ _id: userID });
			return res.status(200).json(user);
		}
		catch (e) {
			return res.status(500).json(e);
		}
	}
	
	// Adding a new `User` in the database
	// With `req.body` Object
	async addOne(req, res) {
		try {
			const user = await new User(req.body);
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
	
	// Deleting a single `User` from the database
	async deleteOne(req, res) {
		try {
			const id = req.params.id;
			const user = await User.deleteOne({ _id: id });
			return res.json(user);
		}
		catch (e) {
			return res.status(500).json(e);
		}
	}
}

module.exports = UserController;