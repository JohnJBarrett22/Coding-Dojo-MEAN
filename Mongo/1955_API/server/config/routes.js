var peoples = require("../controllers/peoples");

module.exports = function(app){

    app.get("/", peoples.index)

    app.get("/new/:name", peoples.addPerson)

    app.get("/remove/:name", peoples.removePerson)

    app.get("/:name", peoples.details)
}