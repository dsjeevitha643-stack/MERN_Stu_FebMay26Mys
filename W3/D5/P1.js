// Basics of the click event
const button = document.getElementById("clickBtn");
button.addEventListener("click",function() {
    console.log("Button is clicked");
});
button.addEventListener("click",function() {
    console.log("second event listener:Button is clicked");
});