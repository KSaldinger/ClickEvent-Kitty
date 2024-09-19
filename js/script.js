const button = document.querySelector(".show-cat");
const cat = document.querySelector(".cat");


button.addEventListener("click", function(){
    if(cat.classList.contains("show")) {
        cat.classList.remove("show");
        cat.classList.add("disappear");
        button.innerText = "Wait, come back!";
    } else {
        cat.classList.add("show");
        cat.classList.remove("disappear");
        button.innerText = "Shoo, cat!";
    }
});

console.log();