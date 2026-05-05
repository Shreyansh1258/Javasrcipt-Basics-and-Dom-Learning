// Stopwatch 

let time = 0;
let interval;

let display = document.querySelector("#time");

document.querySelector("#start").addEventListener("click",function(){
    clearInterval(interval);
    interval = setInterval(function() {
        time++;
        if(time>5){
            display.style.color  = "red";
        }
        display.innerHTML = time;
    }, 1000);
});

document.querySelector("#stop").addEventListener("click",function(){
    clearInterval(interval);
});

document.querySelector("#reset").addEventListener("click",function(){
    clearInterval(interval);
    time = 0;
    display.innerHTML = time;
});