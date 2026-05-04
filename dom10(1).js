let button = document.querySelector("#btn");
button.addEventListener("click",function(){
    /** @type {HTMLElement} */
    let element = document.querySelector("#text");
    element.innerText = "Button Clicked !";
})

