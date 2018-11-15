// Dojo Weather API
// Objectives:
// Practice using Angular routing to display different components
// Practice making http requests to an API and displaying the data received
// Create an app which presents the user with 6 different views (using the router-outlet) each different url/view should present the user with a Dojo city. Within each of these views, present the user with the current weather information. This assignment will require you to retrieve an API key from https://openweathermap.org/api
// Additionally, show an image of each of the cities, you can use https://www.pexels.com/ for royalty free images.

//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var path = require("path");

//Config
app.use(express.static(__dirname + "/public/dist/public"));
app.use(bodyParser.json());

//Database
mongoose.connect("mongodb://localhost/weapther_api");
require("./server/config/mongoose.js");

//Routes
require("./server/config/routes.js")(app);

app.all("*", (req,res,next) => {
    res.sendFile(path.resolve("./public/dist/public/index.html"))
});

//Port
app.listen(1337, function(){
    console.log("Listening on part: 1337");
})