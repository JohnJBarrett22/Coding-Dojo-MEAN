var mongoose = require("mongoose");
var Quote = mongoose.model("Quote");
var moment = require("moment");

module.exports = {

    index: function(req, res){
        console.log("~Root~");
        res.render("index");
    },

    quotePage: function(req, res){
        console.log("~Get!~");
        Quote.find({}, function(err, quotes) {
            if(err){
                console.log("~Error matching DB request!~");
            }
            else {
                res.render("quotes", {info: quotes, moment: moment});
            }
        }).sort({_id:-1});
    },

    addQuote: function(req, res){
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
    }
}