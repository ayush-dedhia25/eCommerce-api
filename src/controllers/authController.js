const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../database/models/User");
require("dotenv").config();

class AuthController {
	constructor() {}

	async login(req, res) {
		const { email, password } = req.body;
		
		if (!email || !password) {
			return res.status(404).json({
				success: false,
				message: "Please provide authentication details!"
			});
		}

		try {
			const user = await User.findOne({
				email
			});
			const isMatched = await bcrypt.compare(password, user.password);

			if (!isMatched) {
				return res.status(404).json({
					success: false,
					message: "Invalid username or password!"
				});
			} else {
				const token = jwt.sign(
					{
						email: user.email,
						password: user.password
					},
					process.env.TOKEN_SECRET
				);

				return res.status(200).json({
					email: user.email,
					password: user.password,
					token
				});
			}
		}
		catch (e) {
			console.log(e);
			return res.status(404).json({
				ok: false,
				message: "User not found!"
			});
		}
	}

	async logout(req, res) {
		try {}
		catch (e) {}
	}
}

module.exports = AuthController;