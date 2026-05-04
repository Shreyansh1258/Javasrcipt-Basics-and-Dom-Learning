/** @type {HTMLElement} */
let input = document.querySelector("#inputbox");

input.addEventListener("input",function(){
     /** @type {HTMLElement} */
    let value = input.value;
    document.querySelector("#output").innerText = value;
});