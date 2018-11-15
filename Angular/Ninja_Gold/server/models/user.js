var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    gold: {type: Number, default: 0},
    log: [{type: String, default: ''}]
  }, {timestamps: true})

mongoose.model("User", UserSchema);