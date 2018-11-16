var mongoose = require("mongoose");
var Author = mongoose.model("Author");

module.exports = {

    index: function(req, res){
        Author.find({}, function(err, author){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", author: author});
            }
        })
    },

    details: function(req, res){
        let id = req.params.id;
        Author.findOne({_id: id},function(err, author){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", author: author});
            }
        })
    },

    addAuthor: function(req, res){
        Author.create({name: req.body.name}, function(err, author){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", added: true});
            }
        })
    },

    editAuthor: function(req, res){
        let id = req.params.id;
        Author.findById(id, function(err, author){
            console.log("EDIT?", author)
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                if(req.body.name){
                    console.log("FORM NAME", req.body.name)
                    console.log("Author name:", author.name)
                    author.name = req.body.name;
                    console.log("Saved name", author.name)
                }
            }
            author.save(function(err){
                console.log("SAVE", author)
                if(err){
                    res.json({message: "Error!", error: err});
                }
                else{
                    res.json({message: "Edit Success!", author: author})
                }
            })
        })
    },

    deleteAuthor: function(req, res){
        let id = req.params.id;
        Author.remove({_id: id},function(err){
            if(err){
                res.json({message: "Error!", error: err});
            }
            else{
                res.json({message: "Success!", removed: true});
            }
        })
    }
}