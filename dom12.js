//simple login check 
/** let button = document.querySelector("#btn");
button.addEventListener("click",function(){
    let input = document.querySelector("#inputbox");
    let value = input.value;

    if(value==="admin"){
        document.querySelector("#output").innerHTML = "Welcome Admin";
    }
    else{
        document.querySelector("#output").innerHTML = "Access Denied";
    }
}); */


//Add input to list 

let button = document.querySelector("#btn");
button.addEventListener("click",function(){
    let input = document.querySelector("#inputbox");
    let value = input.value;
    let li = document.createElement("li");
    li.innerText = value;

    li.addEventListener("click",function(){
        li.remove();
    });
    document.querySelector("#list").appendChild(li);
});
