// Filter method
// let marks = [75,49,56,70,82,51,68];
// let passed = marks.filter(mark => mark >= 70);
// console.log(marks);
// console.log(passed);

let student = [
    {name:"Arjun", score: 70},
    {name: "Krishna",score:82},
    {name:"Raj",score:56},
    {name:"Radha",score:68},
];
let qulifiedStudent = student.filter(s => s.score < 70 );
console.log(qulifiedStudent);



