//Comparison en logical operators

const age = 25;
const isFemale = true;
const driverStatus = "Bob";
const Name = "Bram";
const totalAmount = 101;

//test
/*
const age = 8;
const isFemale = false;
const driverStatus = "Niet Bob";
const Name = "Piet";
*/


if (age >= 18 && age <= 25) {
    console.log("You can go in AND get a 50% discount!");
} else if (age > 25) {
    console.log("You can go in!");
} else {
    console.log("Sorry, you are too young!");
}

if (isFemale) {
    console.log("This person is a Female.");
} else {
    console.log("This person is a Man.");
}

if (driverStatus == "Bob") {
    console.log("This person is the Bob.");
} else {
    console.log("This person drunk and cannot drive!")
}

if (Name == "Sarah" || Name == "Bram") {
    console.log("Yass, lucky you, get one drink for free!!");
} else {
    console.log("Welcome to our Anniversary Party!!");
}

if (totalAmount > 25 && totalAmount <= 50) {
    console.log("Je hebt over de 25Euro aan drank besteld en krijgt daarom GRATIS (vega)bitterballen!!");
} else if (totalAmount > 50 && totalAmount <= 100) {
    console.log("Je hebt over de 50Euro aan drank besteld en krijgt daarom GRATIS een portie Nacho's!!");
} else if (totalAmount > 100) {
    console.log("Party Animal, je hebt voor meer dan 100Euro aan drank besteld en krijgt daarom GRATIS een FLES CHAMPAGNE. Let's party on!!");
} else {
    console.log("Bestel voor meer dan 25 euro en krijg gratis food. Bij 100 euro zelfs een fles Champagne, dus trommel je vrienden op and make that order!!");
}