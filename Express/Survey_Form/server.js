// Assignment: Survey Form
// Before you start coding this, first outline or write down the steps of accomplishing this.
// For example:
// Have the server render views/index.ejs that has the form for the user to fill out
// The user fills out the form and submits
// The submitted form gets sent to /result
// The server recognizes when someone posts things to /result, grabs information from the POST, and sends the POST data back as it renders views/results.ejs

var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var app = express();

app.use(bodyParser.urlencoded({entended: true}));
app.use(express.static(__dirname + "/static"));
app.use(session({
    secret: 'codingdojo',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
}))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("index");
})

app.post("/result", function(req, res){
    req.session.results = req.body;
    console.log(req.body);
    res.redirect("result");
})

app.get("/result", function(req, res){
    res.render("results", {results:req.session.results});
})

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})