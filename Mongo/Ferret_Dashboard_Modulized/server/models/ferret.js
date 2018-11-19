var mongoose = require("mongoose");

var FerretSchema = new mongoose.Schema({
    name: {type: String, required: [true, "Ferret name required!"], minlength: 3},
    age: {type: Number, required: [true, "Ferret age required!"], min: 1, max: 15},
    color: {type: String, required: [true, "Ferret color required!"], minlength: 3}
    }, {timestamps: true});

    mongoose.model("Ferret", FerretSchema);