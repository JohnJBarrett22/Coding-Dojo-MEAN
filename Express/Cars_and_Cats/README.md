# Express Cars and Cats

You now have the tools necessary to repeat the Cars and Cats assignment from Node, but with Express!

Take the time to appreciate what a difference a framework makes.

For this assignment, you will need a static directory. You will not need routes, ejs, nor a views directory.

Create four html documents in your static directory. These files will be served with the following urls. Why? Because we're requesting static content, and because of our Express static middleware, our server knows to find static files in the static directory. 

localhost:8000/cars.html - A simple HTML page that shows some cool pictures of different cars.  These car pictures should be stored in your static directory.  DON'T just link to pictures of cars stored somewhere else! Even better, put them in a directory called 'images' inside of your static directory.

localhost:8000/cats.html - A simple HTML page with some cool pictures of cats.  Again, make sure these pictures are stored on your server.

localhost:8000/form.html - A simple form where the user can add new car information. For this page, there is no need to have the form do anything. Simply display the form there.

Also, add a basic html file in your static directory called index.html. What happens when you navigate to the root route localhost:8000? 
