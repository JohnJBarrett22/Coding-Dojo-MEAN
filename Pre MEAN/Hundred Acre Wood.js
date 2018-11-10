// Hundred Acre Wood
// Objectives:
// Practice creating objects that point to each other.
// Complete the map of the Hundred Acre Wood that we started in the previous module.
// Create objects for each location on the map.
// Have the objects point to each other as indicated in the diagram.

var tigger = { character: "Tigger" };
var pooh = { character: "Winnie the Pooh" };
var piglet = { character: "Piglet" };
var bees = { character: "Bees" };
var robin = { character: "Christopher Robin" };
var owl = { character: "Owl" };
var rabbit = { character: "Rabbit" };
var gopher = { character: "Gopher" };
var kanga = { character: "Kanga" };
var eeyore = { character: "Eeyore" };
var heffa = { character: "Heffalumps" };

tigger.north = pooh;

pooh.south = tigger;
pooh.west = piglet;
pooh.east = bees;
pooh.north = robin;

piglet.east = pooh;
piglet.north = owl;

bees.west = pooh;
bees.north = rabbit;

robin.south = pooh;
robin.west = owl;
robin.east = rabbit;
robin.north = kanga;

owl.south = piglet;
owl.east = robin;

rabbit.south = bees;
rabbit.west = robin;
rabbit.east = gopher;

gopher.west = rabbit;

kanga.south = robin;
kanga.north = eeyore;

eeyore.south = kanga;
eeyore.east = heffa;

heffa.west = eeyore;