var tasks = require("../controllers/tasks.js");

module.exports = function(app){

    app.get("/tasks", tasks.index)

    app.get("/tasks/:id", tasks.details)

    app.post("/tasks", tasks.addTask)

    app.put("/tasks/:id", tasks.editTask)

    app.delete("/tasks/:id", tasks.deleteTask)
}