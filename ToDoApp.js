//day 13

let button  = document.querySelector("#btn");
let count = 0;
let p = document.querySelector("#task");
button.addEventListener("click",function(){
    count++;
    let input = document.querySelector("#inputBox");
    let value = input.value;
    let li = document.createElement("li");
    li.innerText = value;
    li.style.cursor = "pointer";
    li.style.textDecoration = "line-through";
    li.addEventListener("click",function(){
        li.remove();
        count--;
        p.innerText = "Total task : " + count;
    });
    document.querySelector("#list").appendChild(li);
    p.innerText = "Total task : " + count;
    input.value = "";
});