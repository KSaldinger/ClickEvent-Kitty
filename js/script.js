const button = document.querySelector(".show-cat");
const cat = document.querySelector(".cat");


button.addEventListener("click", function(){
    button.innerHTML = "It's working!";
    cat.classList.add("show");
})
//console.log(cat.outerHTML);