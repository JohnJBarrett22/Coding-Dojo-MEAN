// Hello Angular
// Objectives:
// Have Angular served by an Express project
// Create a new Angular project served by your previously created Restful Task API assignment. The end result of this should be one Express project which is serving the 'dist' folder within its Angular directory. Upon reaching the server's root directory (e.g. 'http://localhost:8000') we should be presented with the Angular app's initial welcome page (the default page for a new Angular project).

//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

//Config
app.use(express.static( __dirname + '/public/dist/public' ));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Database
mongoose.connect("mongodb://localhost/restful_task_API");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

//Port
app.listen(1337, function(){
    console.log("Listening on port: 1337");
})