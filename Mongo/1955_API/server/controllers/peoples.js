var mongoose = require("mongoose");
var People = mongoose.model("People");

module.exports = {

    index: function(req, res){
        People.find({}, function(err, people){
            if(err){
                res.json(err);
            }
            else{
                res.json(people);
            }
        })
    },

    addPerson: function(req, res){
        People.create({name:req.params.name}, function(err, people){
            if(err){
                res.json(err);
            }
            else{
                res.json({added:true});
            }
        })
    },

    removePerson: function(req, res){
        People.remove({name:req.params.name},function(err,person){
            if(err)
                res.json(err);
            else
                res.json({removed:true});
        })
    },

    details: function(req, res){
        People.findOne({name:req.params.name},function(err,person){
            if(err)
                res.json(err);
            else
                res.json(person);
        })
    }
}