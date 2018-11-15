var users = require("../controllers/users.js");

module.exports = function(app){

    app.get("/users", users.users)

    app.get("/users/new", users.newUser)

    app.get("/users/:id", users.findUser)

    app.put("/users/:id", users.editUser)
}