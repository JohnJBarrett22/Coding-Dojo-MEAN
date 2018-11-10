var http = require("http");
var fs = require("fs");
var server = http.createServer(function (request, response){
    
    console.log("Client request URL: ", request.url);

    //Routes
    if(request.url === "/") {
        fs.readFile("views/index.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/cars") {
        fs.readFile("views/cars.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/cats") {
        fs.readFile("views/cats.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/cars/new") {
        fs.readFile("views/newcar.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    //Car Images
    else if(request.url === "/images/blue.jpg") {
        fs.readFile("images/blue.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/orange.jpg") {
        fs.readFile("images/orange.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/bugatti.jpg") {
        fs.readFile("images/bugatti.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    //Cat Images
    else if(request.url === "/images/float.jpg") {
        fs.readFile("images/float.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/what.jpg") {
        fs.readFile("images/what.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/images/helmet.jpg") {
        fs.readFile("images/helmet.jpg", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "image/jpg"});
            response.write(contents);
            response.end();
        });  
    }
    else {
        response.writeHead(404);
        response.end("File not found!!!");
    }
});

server.listen(7077);
console.log("Running in localhost at port 7077.")