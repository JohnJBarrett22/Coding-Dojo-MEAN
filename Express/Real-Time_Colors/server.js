// Real-Time Colors
// Create a socket application that presents the user with 3 buttons for color options. When a user clicks on one of the color options, all currently connected socket users should have their entire background change to that color.
// BONUS: As soon as a new user connects to our server, update their color with the most recent color previously selected by the last user.

//Imports
var express = require("express");
var app = express();
var server = app.listen(1337);
var io = require("socket.io")(server);
var color = "";

//Config
app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//Sockets
io.on("connection", function(socket){
    console.log("Connected!");
    socket.emit("launch", {
        bgc : color
    });
    socket.broadcast.emit("launch", {
        bgc : color
    });

    socket.on("green_push", function(){
        socket.emit("green_bg");
        socket.broadcast.emit("green_bg");
        color = "green"
    });
    socket.on("blue_push", function(){
        socket.emit("blue_bg");
        socket.broadcast.emit("blue_bg");
        color = "blue"
    });
    socket.on("pink_push", function(){
        socket.emit("pink_bg");
        socket.broadcast.emit("pink_bg");
        color = "pink"
    });
});

//Routes
app.get("/", function(req, res){
    console.log("~Root~");
    res.render("index");
});