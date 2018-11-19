var mongoose = require("mongoose");

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 3},
    }, {timestamps: true});

    mongoose.model("Quote", QuoteSchema);