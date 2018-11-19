var ferrets = require("../controllers/ferrets.js")

module.exports = function(app){

    app.get("/", ferrets.index)
    
    app.get("/ferrets/new", ferrets.newForm)
    
    app.get("/ferrets/:_id", ferrets.details)
    
    app.get("/ferrets/edit/:_id", ferrets.editPage)
    
    app.post("/ferrets", ferrets.addFerret)
    
    app.post("/ferrets/:_id", ferrets.editFerret)
    
    app.post("/ferrets/destroy/:_id", ferrets.deleteFerret)
}