// Assignment: Epic Button Game
// For this assignment, build the app described in the mockup below using Express and sockets.
// Your app should serve only a single view, index.ejs.  Any time the epic button is pushed, the count should update on every user who is connected via sockets.  This should happen in real time.
// If a user clicks the reset button, the count should reset to 0 for every user as well!
// Think about the events the client will need to listen for and the events the server must listen for.  Map out the emitters and listeners you will need before you start coding.  Use a variable on the server to keep track of how many times the button has been clicked.  

//Imports
var express = require("express");
var app = express();
var server = app.listen(1337);
var io = require("socket.io")(server);
var counter = 0;

//Config
app.use(express.static(__dirname +"/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//Sockets
io.on("connection", function(socket){
 
    console.log("Connected and count initialized!");
    socket.emit("new_count", {
        newCount : `This button has been pushed ${counter} times(s)!`
    });
    socket.broadcast.emit("new_count", {
        newCount : `This button has been pushed ${counter} times(s)!`
    });
    socket.on("epic_push", function(){
        counter += 1;
        socket.emit("new_count", {
            newCount : `This button has been pushed ${counter} times(s)!`
        });
        socket.broadcast.emit("new_count", {
            newCount : `This button has been pushed ${counter} times(s)!`
        });
    })
    socket.on("reset_push", function(){
        counter = 0;
        socket.emit("reset_count", {
            newCount : `This button has been pushed ${counter} times(s)!`
        });
        socket.broadcast.emit("reset_count", {
            newCount : `This button has been pushed ${counter} times(s)!`
        });
    })
})

//Routes
app.get("/", function(req, res){
    console.log("~Root~");
    res.render("index");
})