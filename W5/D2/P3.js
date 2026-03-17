// Asynchronous approch of Node.js

console.log("Step 1: Script started");
setTimeout(() => {
    console.log("Step 3: Delayed callbak finished. F1.");
},1000);

setTimeout(function() {
    console.log("Step 3: Delayed callbak finished. F2.");
},3000);

console.log("step 2: Script did not stop while waiting.");