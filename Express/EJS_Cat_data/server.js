var express = require("express");
var app = express();

app.use(express.static(__dirname + "/static"));

app.set("views", __dirname + "/Views");
app.set("view engine", "ejs");

app.get("/cats", function(request, response){
    response.render("cats");
})

app.get("/tibbers", function(reuqest, response){
    var details = {
        name : "Tibbers",
        favFood : "Possums",
        age : "3",
        pic : "cat.jpg",
        spots : ["Under the couch", "On the car tire", "Near the trash can"]
    }
    response.render("details", {kitty: details});
})

app.get("/cuddles", function(reuqest, response){
    var details = {
        name : "Cuddles",
        favFood : "Moist trash",
        age : "7",
        pic : "paw.jpg",
        spots : ["Near the toilet", "Dirty laundry", "Outside"]
    }
    response.render("details", {kitty: details});
})

app.get("/minky", function(reuqest, response){
    var details = {
        name : "Minky",
        favFood : "Cheap at food",
        age : "5",
        pic : "lay.jpg",
        spots : ["In the blankets", "Cat tree", "In the dog's bed"]
    }
    response.render("details", {kitty: details});
})

app.listen(8000, function(){
    console.log("Listening on port: 8000");
})