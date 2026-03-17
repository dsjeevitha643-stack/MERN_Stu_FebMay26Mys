function initThemeToggle(){
    const toggleBtn = document.getElementById("theme-toggel");
    const body = document.body;

    const savedTheme = localStorage.getItem("protfolio-theme");

    if(savedTheme === "dark"){
        body.classList.add("dark-mode");
    }
    toggleBtn.addEventListener("click",function(){
        body.classList.toggle("dark-mode");
        if(body.classList.contains("dark-mode")){
            localStorage.setItem("portfolio-theme","dark");
            console.log("Dark mode enabled");
        }else{
            localStorage.setItem("protfolio-theme","light");
            console.log("light mode enabled");
        }
    });
}