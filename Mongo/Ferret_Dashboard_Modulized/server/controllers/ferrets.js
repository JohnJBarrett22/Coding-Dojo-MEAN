var mongoose = require("mongoose");
var Ferret = mongoose.model("Ferret");

module.exports = {

    index: function(req, res){
        console.log("~Root~");
        Ferret.find({}, function(err, ferrets){
            if(err){
                console.log("~Error matching DB request!~", err);
            }
            else{
                res.render("index", {info: ferrets});
            }
        })
    },

    newForm: function(req, res){
        console.log("~New Form~");
        res.render("new");
    },

    details: function(req, res){
        console.log("~Find~")
        Ferret.findOne({_id:req.params._id}, function(err, ferret){
            if(err){
                console.log("~Error matching DB request!~", err);
            }
            else{
                res.render("details", {ferret:ferret});
            }
        })
    },

    editPage: function(req, res){
        console.log("~Edit Page~");
        Ferret.findOne({_id:req.params._id}, function(err, ferret){
            if(err){
                console.log("Error mactching DB request!~", err);
            }
            else{
                res.render("edit", {ferret:ferret});
            }
        })
    },

    addFerret: function(req, res){
        console.log("~Post~", req.body);
        var ferret = new Ferret({name: req.body.name, age: req.body.age, color: req.body.color});
        ferret.save(function(err){
            if(err){
                console.log("~Something added a ferret!~", err);
                for(var key in err.errors){
                    req.flash("ferretform", err.errors[key].message);
                }
                res.redirect("/ferrets/new");
            }
            else{
                console.log("~Successfully added a ferret!~");
                res.redirect("/");
            }
        })
    },

    editFerret: function(req, res){
        console.log("~Edit~");
        Ferret.findOne({_id:req.params._id}, function(err, ferret){
            if(err){
                console.log("~Error matching DB request!~", err);
            }
            else{
                Ferret.update({_id: ferret._id}, {$set: {name: req.body.name, age: req.body.age, color: req.body.color}}, function(err){
                    if(err){
                        console.log("~Error updating~", err);
                    }
                    else{
                        res.redirect("/");
                    }
                })
            }
        })
    },

    deleteFerret: function(req, res){
        console.log("~Destroy~");
        Ferret.findOne({_id:req.params._id}, function(err, ferret){
            if(err){
                console.log("~Error matching DB request!~", err);
            }
            else{
                Ferret.remove({_id:ferret._id}, function(err){
                    if(err){
                        console.log("~Error on delete!~", err);
                    }
                    else{
                        res.redirect("/");
                    }
                })
            }
        })
    }
}