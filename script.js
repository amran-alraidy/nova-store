let menubtn = document.querySelector("#menubtn");
let list = document.querySelector("#nav-list");

menubtn.addEventListener("click", function(){
    list.classList.toggle("active");
});