var quotes = require("../controllers/quotes.js");

module.exports = function(app){

    app.get("/", quotes.index)
    
    app.get("/quotes", quotes.quotePage)   

    app.post("/quotes", quotes.addQuote)
}