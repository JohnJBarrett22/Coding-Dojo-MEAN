// Using the TypeScript Playground tool, create a new class called Bike with the following properties/attributes:
// --price
// --max_speed
// --miles
// Create 3 instances of the Bike class.
// Use the constructor() function to specify the price and max_speed of each instance (e.g. let bike1 = new Bike(200, "25mph"); also write the code so that the initial miles is set to be 0 whenever a new instance is created.
// Add the following functions to this class:
// displayInfo() - have this method display the bike's price, maximum speed, and the total miles.
// ride() - have it display "Riding" on the screen and increase the total miles ridden by 10
// reverse() - have it display "Reversing" on the screen and decrease the total miles ridden by 5...
// Have the first instance ride three times, reverse once and have it displayInfo(). Have the second instance ride twice, reverse twice and have it displayInfo(). Have the third instance reverse three times and displayInfo().
// What would you do to prevent the instance from having negative miles?
// Which methods can return this in order to allow chaining methods?
// For assignment submission, upload a ".ts" file with the contents of the TypeScript Playground.

class Bike {
    price : number;
    max_speed : string;
    miles : number;
    constructor (price: number, max_speed: string){
        this.price = price;
        this.max_speed = max_speed;
        this.miles = 0;
        console.log("~New Bike~");
    }

    displayInfo(){
        console.log("Price: " + this.price + ", Max Speed: " + this.max_speed + ", Total Miles: " + this.miles)
    }

    ride(){
        console.log("Riding...");
        this.miles += 10;
        return this;
    }

    reverse(){
        console.log("Reversing...");
        if (this.miles <= 5) {
            this.miles = 0;
            return this;
        }
        else{
            this.miles -= 5;
            return this;
        }
    }
}

var bike1 = new Bike(3000, "10mph");
var bike2 = new Bike(2000, "15mph");
var bike3 = new Bike(1000, "30mph");


console.log("~Bike 1~");
bike1.ride().ride().ride().reverse();
bike1.displayInfo();

console.log("~Bike 2~");
bike2.ride().ride().reverse().reverse();
bike2.displayInfo();

console.log("~Bike 3~");
bike3.reverse().reverse().reverse();
bike3.displayInfo();