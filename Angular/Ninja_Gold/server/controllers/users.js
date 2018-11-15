var mongoose = require("mongoose");
var User = mongoose.model("User");

module.exports = {

    users: function(req, res){
        let users = User.find({}, (err, users) => {
            if (err) {
                res.json({message: 'Error', error: err});
            }
            else {
                res.json({message: 'Success', data: users});
            }
        })
    },
    
    newUser: function(req, res){
        User.create({}, function(err, user){
            if (err) {
                res.json({message: 'Error', error: err});
            }
            else {
                res.json({message: 'Success', data: user});
            }
        })
    },
    
    findUser: function(req, res){
        let user = User.findOne({_id: req.params.id}, (err, user) => {
            if(err){
                res.json({message: 'Error', error: err});
            }
            else {
                res.json({message: 'Success', data: user});
            }
        })
    },
    
    editUser: function(req, res){
    console.log('~Edit~');
    let user = User.findOne({_id: req.params.id}, (err, user) => {
        if(err){
            res.json({message: 'Error', error: err});
        }
        else {
            user.gold += parseInt(req.body.gold);
            user.log.push(req.body.log);
            user.save( (error) => {
                if(error){
                    res.json({message: 'Error', error: error});
                }
                else{
                    res.json({message: 'Success', data: user});
                }
            })
        }})
    }
}