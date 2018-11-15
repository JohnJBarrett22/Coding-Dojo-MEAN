// Restful Tasks
// Objectives:
// Include a service in your existing Angular app
// Building off  your Restful Task API assignment, add a service. Add functions to your service that make AJAX requests to all the get routes you made for the Restful Task API. This includes retrieving all tasks and retrieving a task by ID. Depending on how you wrote your API, it may also include deleting a task by ID. For now, have the service print the data it receives to the console. To complete this assignment, the service will need to be created, registered, and injected into the root component. Also, you'll need HttpClient in order to communicate with your server.
// Create a service
// Register the service
// Import HttpClientModule into the project
// Inject HttpClient into the service
// Inject the service into the root component
// Write functions in the service that make AJAX requests to all get routes in the Restful Task API
// Invoke each function you wrote in the service and have the service console.log the data it receives

// Continue building off your Restful Tasks assignment, which should currently have your service making all the get requests to your server. Now, have the root component invoke the methods in the service that make the requests to the server. Also, have the root component subscribe to the observables that are returned.
// Next, have the root component store the data it receives in its own attributes.
// Finally, you are set up to use the data you have in the root component to manipulate the DOM. Use structural directives to display the data in the HTML.

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