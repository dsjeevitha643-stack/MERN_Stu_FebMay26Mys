const introBtn = document.getElementById("introBtn");
const output = document.getElementById("output");

introBtn.addEventListener("click",function(){
    output.textContent = "Sending request...";
    fetch("https://jsonplaceholder.typicode.com/posts/3")
    .then(function(response){         // response is user defined
        return response.json();
    })
    .then(function (data) {           // data is user defined
        console.log("Raw response object: ",data);
        //output.textContent = "Status: " +response.status+ "\nOk:"+response.ok;
        output.textContent = JSON.stringify(data,null,2);
    })
    .catch(function(error){
        output.textContent = "Unexpected fecth error: "+error.message;
    });
});