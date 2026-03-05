//Callback Function
//Is a function which is passed an argument to another function

function greetUser(name, Callback){
    console.log("Hello, ",name);
    Callback();
}
greetUser("Jeevitha",function(){
    console.log("Callback function executed");
});