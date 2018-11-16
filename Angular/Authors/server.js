// Authors
// Objectives:
// Create a full CRUD app with Angular, Express, Node, and MongoDB
// Include backend validations
// Create an application where users submit their favorite authors. List all the authors on the first page. From there, the user may click on a button to edit or delete each author.
// The edit form must be pre-populated with the existing data for the author.
// Use backend validations to ensure that all author names and quotes are at least three characters long. If the user does not pass validations, display an error message. Validations must also be applied when editing an author.

//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

//Database
mongoose.connect("mongodb://localhost/authors");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(1337, function(){
    console.log("Listening on part: 1337");
});