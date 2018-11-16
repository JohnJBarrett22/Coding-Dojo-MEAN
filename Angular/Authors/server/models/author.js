var mongoose = require("mongoose");

var AuthorSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Author's name is required!"], minlength: [3, "Name must be a minimum of 3 characters"]},
}, {timestamps: true});

mongoose.model("Author", AuthorSchema);