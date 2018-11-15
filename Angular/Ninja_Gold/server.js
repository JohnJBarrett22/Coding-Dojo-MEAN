// (Group Activity) Ninja Gold
// Objectives:
// Use Angular, Express, Node, and MongoDB to create Ninja Gold
// For this assignment, use your knowledge of event handlers, angular components, and services to re-create the beloved Ninja Gold assignment using Angular, Node and MongoDB. The data should be stored in the database. For now, have a new game begin every time the page is refreshed - you may change this later if you choose.

//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//Database
mongoose.connect("mongodb://localhost/ninja_gold");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(1337, function(){
    console.log("Listening on port: 1337");
})