var istatus = document.querySelector("h5");

var addfriend = document.querySelector("#add");

var removefriend = document.querySelector("#remove");

addfriend.addEventListener("click",function(){
    istatus.innerHTML = "Friends";
    istatus.style.color = "green";
    istatus.style.fontFamily = "Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif";

})
removefriend.addEventListener("click",function(){
    istatus.innerHTML = "Stranger";
    istatus.style.color = "red";
})