// Assignment: Survey Form Revisited 
// For example for this particular app,
// Have the server render views/index.ejs that has the form for the user to fill out
// The user fills out the form and submits
// The form information is EMITTED to the server with the event name "posting_form"
// The server listens for an event 'posting_form' and when this event gets triggered, organizes all the emitted information to form a single message and sends this single message with the event called 'updated_message'. It also EMITs an event called 'random_number' with random number between 1-1000.
// The client listens for an event called 'random_number' and when this event gets triggered, shows the number in the HTML.
// The client listens for an event called 'updated_message' and when this event gets triggered, displays the message somewhere in the HTML
var express = require("express");
var app = express();
var server = app.listen(1337);
var io = require("socket.io")(server);


//Use
app.use(express.static(__dirname + "/static"));

//Set
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

io.on('connection', function (socket) {
    console.log("Connected!");
	socket.on("posting_form", function (data){
        var num = Math.floor(Math.random()*1000);
        var object = JSON.stringify(data);
    	socket.emit('updated_message', {
            info: `The data sent via form is: ${object}.`
        });
        socket.emit('random_number', {
            message:`Your lucky emmitted number is: ${num}!`
        });
    });
});

//Get
app.get("/", function(req, res){
    console.log('~Root~');
    res.render("index");
})