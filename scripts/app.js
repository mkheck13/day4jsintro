// alert("")



console.log("Intro to Js");

// This is how we would declare a variable in C#
// string mystring = "Hello world";

// We Know that this is a string data type due to the double quotes around the value

// Due not use var when declaring variables in JS
var myVar = "my var";

// When declaring a variable in JS it is common practice to use let
// Declare variables with let when you know that you would want the value to change

let myString = "Happy Halloween!";
let myInt = 4;
let myBool = true;
console.log(myBool);

myBool = false;

console.log(myBool);

// We can use const to protect the value of the variable from being changed
const myConst = 4;
// myConst = 6;

// JS will impicity convertthe integer to a string
console.log(myString + myInt);

// interpolation in JS
console.log(`hello ${myString}`);

// concatenation in JS
console.log("Hello " + myString);

//Arrays in JS 
let myArray = [1, 2, 3, 4, "pizza", true];
console.log(myArray);

let myElement = document.getElementById("myElement");
console.log(myElement);
myElement.textContent = "I am now changed"