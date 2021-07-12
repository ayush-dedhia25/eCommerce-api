const mongoose = require("mongoose");
const AvailableTypes = require("../../Types");

const baseTypes = Object.entries(AvailableTypes).map(([key, value]) => value);

const ProductSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Please give a name to the product!"]
	},
	price: {
		type: Number,
		min: [5, "Please add product of price more than ₹5"],
		required: [true, "Please provide the price for this product!"]
	},
	variant: {
		type: String,
		required: [true, "Please add the product variant!"]
	},
	mfgDate: {
		type: Date,
		required: [true, "Please provide the manufacturing date of this product!"]
	},
	expDate: {
		type: Date,
		required: [true, "Please provide the expiry date for this product!"]
	},
	quantity: {
		type: Number,
		required: [true, "Please provide the quantity available of this product!"]
	},
	brand: {
		type: String,
		required: [true, "Product brand not provided!"]
	},
	baseType: {
		type: String,
		enum: {
			values: [...baseTypes],
			message: "{VALUE} type is not available!"
		},
		required: [true, "Value for `Product BaseType` property not received!"]
	}
});

ProductSchema.pre("save", function(next) {
	this.mfgDate = new Date(this.mfgDate);
	this.expDate = new Date(this.expDate);
	next();
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = { ProductSchema, Product };