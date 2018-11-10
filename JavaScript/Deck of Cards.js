var suit = {
    1:"\u2660",
    2:"\u2666",
    3:"\u2665", 
    4:"\u2663"
}

var stringValue = {
    1:"Ace",
    2:"Two",
    3:"Three",
    4:"Four",
    5:"Five",
    6:"Six",
    7:"Seven",
    8:"Eight",
    9:"Nine",
    10:"Ten",
    11:"Jack",
    12:"Queen",
    13:"King"
}

var numericValue = {
    1:1,
    2:2,
    3:3,
    4:4,
    5:5,
    6:6,
    7:7,
    8:8,
    9:9,
    10:10,
    11:11,
    12:12,
    13:13
}

class Card{
    constructor(suit, stringValue, numericValue){
        this.suit = suit;
        this.stringValue = stringValue;
        this.numericValue = numericValue;
    }

    show(){
        console.log("A card is shown, revealing it is a "+stringValue+suit+".")
    }
}

class Deck{
    constructor(){
        this.cards = [];
        for(let i = 0; i < 5; i++){
            for(let j = 0; j < 14; j++){
                var card = new Card(suit[i], stringValue[j], numericValue[j])
                this.cards.push(card)
            }
        }
    }

    shuffle(){
       
        var m = this.cards.length,t,i;
        while(m){
            i=Math.floor(Math.random()*m--);
            t=this.cards[m];
            this.cards[m]=this.cards[i];
            this.cards[i]=t;
        }
        return this.cards;
    }
}

class Player{
    constructor(name){
        this.name = name;
        this.hand = 0;
    }

    takeCard(){

    }
    
    discardCard(){

    }
}