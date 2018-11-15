// Copy the code snippets into the TypeScript Playground tool. Identify the errors found in each code snippet. You will see red bars in the Typescript side of the Playground where there is an error.
// Fix the errors in the Playground so that all the red bars are gone and the code still runs as desired.
// Make comments in the code to explain what each error was and how you fixed it.
// For assignment submission, upload a ".ts" file with the contents of the TypeScript Playground.


// 1. Setting types
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "Moo!";
//Answer: myString was defined as a variable, yet was assigned a value of "9", which is not a string.


// 2. Setting the types of function parameters
function sayHello(name: string){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 console.log(sayHello("Hi!"));
 //Answer: sayHello will not work, as a number "9", is being sent as an argument when the parameter only accepts strings.


// 3. Optional parameters
 function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 console.log(fullName("Jimbo", "Jones"));
 //Answer: Either add a question mark to the middleName key, or you can write an if/else condition checking if the middleName exists or not.
 
 
//  4. Interfaces and function parameters
interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 console.log(graduate(jay));
//Answer: This was not working as the const jay, listed "belt" as one of the keys when the interface declares "belts" as one of the keys. It was missing the "s".


// 5. Classes and function parameters
class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 const shane = new Ninja("Alan", "Turing")
 // Since I'm having trouble making an instance of Ninja, I decided to do this:

 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 function study(programmer: Ninja){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(shane));
 //Answer: The work around wasn't working, as the const "turing" is not an instance of Ninja.
 //Converting the shane function over to instantiate a new instance of Ninja, taking in first and last name then changing the parameter on function study does the trick.


//  6. Arrow functions
var increment = (x) => x + 1;
// This works great:
console.log(increment(3));
var square = (x) => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
var multiply = (x,y) => x * y;
// Nor is this working:
var math = (x, y) => {  
   let sum = x + y;
   let product = x * y;
   let difference = Math.abs(x-y);
   return [sum, product, difference];
}
//Answer: Several sets of parenthesis needed to be added, along with a set of curly braces...while also removing a set of curly braces.

// 7. Arrow functions and 'this'
class Elephant {
    constructor(public age: number){}
    birthday = () => function(){
       this.age++;
    }
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday(), 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.
//  Answer: ???