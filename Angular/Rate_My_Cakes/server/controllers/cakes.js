var mongoose = require("mongoose");
var Cake = mongoose.model("Cake");
var Rating = mongoose.model("Rating");

module.exports = {

    index: function(req, res){
        Cake.find({}, function(err, cake){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", cake: cake});
            }
        })
    },

    details: function(req, res){
        let id = req.params.id;
        Cake.find({_id: id},function(err, cake){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", cake: cake});
            }
        })
    },

    addCake: function(req, res){
        Cake.create({baker: req.body.baker, image: req.body.image}, function(err, cake){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", added: true});
            }
        })
    },

    addRating: function(req, res){
        console.log(req.body)
        Rating.create({rating: req.body.rating, comment: req.body.comment}, function(err, newRating){
            console.log(req.body)
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                Cake.findOneAndUpdate({_id: req.params.cakeId}, {$push: {ratings: newRating}}, function(err, data){
                    if(err){
                        res.json({message: "Error!", error: err});
                    }
                    else{
                        res.json({message: "Success!", added: true});
                    }
                })
            }
        })
    }
}