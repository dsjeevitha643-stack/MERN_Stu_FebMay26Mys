// Reduce Method
let num = [5,10,15];
let average = num.reduce((intermediateSum,current) => intermediateSum+current,0) / num.length;
// console.log(average);

//Reduce to object count by category
let items = ["pen","pencile","eraser","pen"];
let count = items.reduce((intermediateValue,item )=>{intermediateValue[item] = (intermediateValue[item] || 0)+1;
    return intermediateValue;
},{});
console.log("Item count: ",count);
