// //  basics of Objects
 const person ={name:'khushi', age:'22', isStudent: false};
console.log("person", person);
console.log("Name",person.name);
console.log("Age:", person['age']);

// add a new property
person.city='mysore';
console.log("person", person);

// modify
person.age = 31;

// delete
delete person.isStudent;
console.log("person", person);

// object constructor
const car = new Object();
car.make = "Audi";
car.model = "A4";
car.year =2026;
console.log(car);