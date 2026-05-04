let count = 0;
let button = document.querySelector("#btn");

button.addEventListener("click",function(){
    count++;
    console.log("Clicked " + count + " times");
});