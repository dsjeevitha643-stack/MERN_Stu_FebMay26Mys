const form = document.getElementById("signupForm");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const message = document.getElementById("message");

form.addEventListener("submit", function(event){
    event.preventDefault();

    if(password.value === confirmPassword.value){
        message.innerText = "Passwords match";
        message.style.color = "green";
    } 
    
    else{
        message.innerText = "Passwords do not match";
        message.style.color = "red";
    }
});