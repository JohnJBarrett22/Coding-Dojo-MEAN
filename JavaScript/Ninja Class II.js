// Assignment: Ninja Class II
// Complete the below challenges using Ninja from the previous assignment.
// .punch() - Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in.
// .kick() - Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and like .punch() will take another Ninja instance.
// Validations - Update .punch() and .kick() so that they only accept Instances of Ninja. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.

function Ninja(name){

    this.name = name;
    this.health = 100;
    var speed = 3;
    var strength = 3;

    Ninja.prototype.sayName = function(){
        console.log("Hi my name is "+name+"!");
    }

    Ninja.prototype.showStats = function(){
        console.log("Name: "+this.name+", Health: "+this.health+", Speed: "+speed+", Strength: "+strength)
    }

    Ninja.prototype.drinkSake = function(){
        this.health = this.health + 10;
    }

    Ninja.prototype.punch = function(target){
        if(!(target instanceof Ninja)){
			console.log(target + " is not a Ninja!");
		}
		else {
        target.health = target.health - 5;
        console.log(target.name+" was punched by "+this.name+" and lost 5 Health!")
        }
    }

    Ninja.prototype.kick = function(target){
        if(!(target instanceof Ninja)){
			console.log(target + " is not a Ninja!");
		}
		else {
        target.health = target.health - (15*strength);
        console.log(target.name+" was kicked by "+this.name+" and lost "+15*strength+" Health!");
        }
    }
}