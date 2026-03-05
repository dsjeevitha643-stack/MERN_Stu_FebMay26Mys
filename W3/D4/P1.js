//Arrays Basics
console.log("Arary basics");
//creating arrays
let emptyArray = [];
let numArray = [1,2,3,3];
let mixedArray = [42,"hello",true, null,{name:"Gola"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

//Using Constructor
let fruits = new Array("Apple","Mango");
console.log(fruits);
console.log("Is fruits an array?",Array.isArray(fruits));

// Push 
fruits.push("cherry");
console.log(fruits);

// Pop : remove
fruits.pop();
console.log(fruits);

//unshift: adds to beginning
fruits.unshift("Orange");
console.log(fruits);

//shift: remove from beginning
fruits.shift();
console.log(fruits);