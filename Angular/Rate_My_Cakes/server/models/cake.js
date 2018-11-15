var mongoose = require("mongoose");

var RatingSchema = new mongoose.Schema({
    rating: {type: Number},
    comment: {type: String, default: ""},
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

var CakeSchema = new mongoose.Schema({
    baker: {type: String, default: ""},
    image: {type: String, default: ""},
    ratings: [RatingSchema]
}, {timestamps: {createdAt: "created_at", updatedAt: "updated_at"}});

mongoose.model("Rating", RatingSchema);
mongoose.model("Cake", CakeSchema);