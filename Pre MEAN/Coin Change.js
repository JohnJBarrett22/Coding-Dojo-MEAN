// Coin Change
// Objectives:
// Write a function that creates and returns an object.
// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.

// Example: coinChange(312) returns {dollars: 3, dimes: 1, pennies: 2}
// Example: coinChange(78) returns {quarters: 3, pennies: 3}

function coinChange(cents){
    let dollars = 0;
    let quarters = 0;
    let dimes = 0;
    let nickels = 0;
    let pennies = 0;
    pennies = cents % 100;
    dollars = (cents - pennies)/100;
    temp = pennies;
    pennies = pennies % 25;
    quarters = (temp - pennies)/25;
    temp = pennies;
    pennies = pennies % 10;
    dimes = (temp - pennies)/10;
    temp =  pennies;
    pennies = pennies % 5;
    nickels = (temp - pennies)/5;
    console.log("Dollars: "+dollars);
    console.log("Quarters: "+quarters);
    console.log("Dimes: "+dimes);
    console.log("Nickels: "+nickels);
    console.log("Pennies: "+pennies);
}