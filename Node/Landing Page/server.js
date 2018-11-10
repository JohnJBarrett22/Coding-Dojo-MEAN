// Assignment: Landing Page
// Create a small node server capable of handling the following request URLs:

// localhost:6789/    This route should serve a view file called index.html and display a greeting.
// localhost:6789/ninjas    This route should serve a view file called ninjas.html and display information about ninjas.
// localhost:6789/dojos/new    This route should serve a view file called dojos.html and have a form (don't worry about where the form should be sent to).
// If the URL is anything other than the ones above, have an error page load saying that the URL requested is not available.

var http = require("http");
var fs = require("fs");
var server = http.createServer(function (request, response){
    
    console.log("Client request URL: ", request.url);

    if(request.url === "/") {
        fs.readFile("index.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url === "/ninjas") {
        fs.readFile("ninjas.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else if(request.url =="/dojos/new") {
        fs.readFile("dojos.html", "utf8", function(errors, contents) {
            response.writeHead(200, {"Content-Type": "text/html"});
            response.write(contents);
            response.end();
        });  
    }
    else {
        response.writeHead(404);
        response.end("File not found!!!");
    }
});

server.listen(6789);
console.log("Running in localhost at port 6789.")