const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const validator = require("validator");
const validateBirthDate = require("is-valid-birthdate");

const { ProductSchema } = require("./Product");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please provide your name!"]
	},
	email: {
		type: String,
		unique: true,
		validate: {
			validator: (val) => validator.isEmail(val),
			message: props => `${props.value} is not a valid email address!`
		},
		required: [true, "Please provide your email!"]
	},
	password: {
		type: String,
		min: [8, "password must be atleast 8 characters, received {VALUE} characters!"],
		max: [12, "limit is 12 characters only, got {VALUE} characters!"],
		required: [true, "Please provide your password!"]
	},
	dob: {
		type: Date,
		validate: {
			validator: (val) => validateBirthDate(val, { minAge: 18 }),
			message: props => `${props.value} below 18 age!`
		},
		required: [true, "Please provide date of birth!"]
	},
	phoneNo: {
		type: Number,
		validate: {
			validator: (phone) => validator.isMobilePhone(phone.toString(), ["en-IN"]),
			message: props => `${props.value} is invalid phone number!`
		},
		required: [true, "Please provide your phone number!"]
	},
	cart: [ProductSchema]
});

UserSchema.pre("save", function(next) {
	if (this.isModified("password")) {
		bcrypt.genSalt(10, (err, salt) => {
			bcrypt.hash(this.password, salt, (err, hash) => {
				this.password = hash;
				this.dob = new Date(this.dob);
				next();
			});
		});
	}
});

const User = mongoose.model("User", UserSchema);

module.exports = { User };