var cakes = require("../controllers/cakes.js");

module.exports = function(app){

    app.get("/cakes", cakes.index);

    app.get("/cakes/:id", cakes.details);

    app.post("/cakes", cakes.addCake);

    app.post("/ratings/:cakeId", (req, res) => {
        cakes.addRating(req, res);
    });
}