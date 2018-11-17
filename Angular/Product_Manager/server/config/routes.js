var products = require("../controllers/products.js");
var path = require("path");

module.exports = function(app){

    app.get("/api/products", products.index)

    app.get("/api/products/:id", products.show)

    app.post("/api/add", products.addProduct)

    app.put("/api/edit/:id", products.editProduct)

    app.delete("/api/delete/:id", products.deleteProduct)

    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });
}