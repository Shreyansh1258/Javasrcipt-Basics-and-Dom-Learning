/** let button = document.querySelector("#btn");
button.addEventListener("click",function(){
    let element = document.querySelector("#head2");
    element.innerHTML = "<h2>Lets Go !</h2>";
})   */

//this was understanding of innerHTML


/** let newpara = document.createElement("p");
newpara.innerHTML = "THIS IS NEW PARA";
document.body.appendChild(newpara);  */

//this was dynamic text adding 


/** let button = document.querySelector("#btn");
button.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = "New Element";
    document.querySelector("#list").appendChild(li);
}) ; */

// this was dynamic adding by clicking the button

let button = document.querySelector("#btn");
button.addEventListener("click",function(){
    let li = document.createElement("li");
    li.innerText = "Click to remove me ";


    li.addEventListener("click",function(){
        li.remove();
    });

    document.querySelector("#list").appendChild(li);
});

// clicking the button add the text and clicking  the text removes it 