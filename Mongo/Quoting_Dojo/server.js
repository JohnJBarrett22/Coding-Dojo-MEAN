// Assignment: Quoting Dojo
// In this assignment, you are going to build a simple app that allows users to add quotes to a database and display them on a separate page.
// The 'add my quote' button should add the user's quote to the database, but the 'skip to quotes' button should take the user directly to the main page.  
// Use the following URLs for your project:
// GET ' / ' for the screen on top
// POST '/quotes' for the method of the form to make a new quote.
// GET '/quotes' for the screen on the right (where all the quotes are rendered).
// When you create a new quote, if there are errors in the .save() method, use flash messages to display the errors.

//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var session = require("express-session");
var flash = require("express-flash");
var moment = require("moment");
mongoose.Promise = global.Promise;

//Config
app.use(flash());
app.use(express.static(__dirname + "/static"));
app.use(bodyParser.urlencoded({useNewUrlParser: true}));
app.use(session({
    secret: "quotes",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))

app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

//Sockets

//Database
mongoose.connect("mongodb://localhost/quoting_dojo");

var QuoteSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    quote: {type: String, required: true, minlength: 3},
    }, {timestamps: true});
    mongoose.model("Quote", QuoteSchema);
    var Quote = mongoose.model("Quote");

//Routes
app.get("/", function(req, res){
    console.log("~Root~");
    res.render("index");
})

app.get("/quotes", function(req, res){
    console.log("~Get!~");
    Quote.find({}, function(err, quotes) {
        if(err){
            console.log("~Error matching DB request!~");
        }
        else {
            res.render("quotes", {info: quotes, moment: moment});
        }
    }).sort({_id:-1});
})

app.post("/quotes", function(req, res){
    console.log("~Post~", req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err){
            console.log("~Something went wrong!~", err);
            for(var key in err.errors){
                req.flash("quoteform", err.errors[key].message);
            }
            res.redirect("/");
        }
        else{
            console.log("~Successfully added a quote!~");
            res.redirect("/quotes");
        }
    })
})

//Port
app.listen(1337, function(){
    console.log("Listening on port: 1337");
})