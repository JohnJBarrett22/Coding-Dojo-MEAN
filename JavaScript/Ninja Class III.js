// Assignment: Ninja Class III
// Part I
// Recreate the base Ninja class from scratch using ES6 classes. Your Ninja needs the following public attributes (do not worry about private variables for this assignment):
// name
// health
// speed
// strength
// Speed and strength should be 3 by default. Health should be 100 by default.
// The Ninja class should have the following methods:
// sayName() - This should log that Ninja's name to the console.
// showStats() - This should show the Ninja's name, strength, speed, and health.
// drinkSake() - This should add +10 health to the Ninja

class Ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log("Hi my name is "+this.name+"!");
    }
    showStats(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+this.speed+", Strength: "+this.strength)
    }
    drinkSake(){
        this.health = this.health + 10;
    }
}

// Part II - Sensei Class
// Extend the Ninja class and create the Sensei class. A Sensei should have 200 Health, 10 speed, and 10 strength by default. In addition, a Sensei should have a new attribute called wisdom, and the default should be 10. Finally, add the speakWisdom() method. speakWisdom() should call the drinkSake() method from the Ninja class, before console.logging a wise message.

class Sensei extends Ninja{
    constructor(name){
        super(name);
        this.health = 200;
        this.speed = 10;
        this.stregnth = 10;
        this.wisdom = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log("When in doubt using VIM, just type random characters until it saves and exits!")
    }
}