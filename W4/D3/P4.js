const jsonOutput = document.getElementById("jsonOutput");

document.getElementById("saveBtn").addEventListener("click",function(){
    const user = {
        
        id: "101",
        name: "Jeevitha",
        role: "fullstack",
        skill: ["HTML","CSS","JS"]

    };
    localStorage.setItem("userProfile",JSON.stringify(user));
    jsonOutput.textContent = "string object stored as string to localStorage";

});
document.getElementById("saveBtn").addEventListener("click",function(){
    const up = localStorage.getItem("userProfile");
    console.log(JSON.parse(up));
    console.log(up);
    jsonOutput.textContent = "userProfile" + up;
});

