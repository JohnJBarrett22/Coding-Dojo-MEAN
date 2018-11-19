//Imports
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

// var server = app.listen(1337);

//Config
app.use(express.static(__dirname +"/static"));
app.use(bodyParser.urlencoded({ useNewUrlParser: true }));

app.set("views", __dirname +"/views");
app.set("view engine", "ejs");

//Sockets

//Database
mongoose.connect('mongodb://localhost/basic_mongoose');

var UserSchema = new mongoose.Schema({
    name: String,
    age: Number
   })
   mongoose.model('User', UserSchema);
   var User = mongoose.model('User')
   

//Routes
app.get("/", function(req, res){
    console.log("~Root~");
    User.find({}, function(err, users) {
        if(err){
            console.log("~Error matching DB request!~");
        }
        else {
            res.render('index', {info: users});
        }
    });
})

app.post('/users', function(req, res){
    console.log("~Post~", req.body);
    var user = new User({name: req.body.name, age: req.body.age});
    user.save(function(err){
        if(err){
          console.log('~Something went wrong!~');
        } 
        else {
          console.log('~Successfully added a user!~');
          res.redirect('/');
        }
    })
})

app.listen(1337, function(){
    console.log("Listening on port: 1337");
})