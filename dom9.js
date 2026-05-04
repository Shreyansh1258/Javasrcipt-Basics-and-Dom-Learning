function changePara(){
     /** @type {HTMLElement} */
    let word = document.querySelector(".para");
    word.innerText = "Welcome to day 9 of Learning JS and DOM" ;
    word.style.color = "red";
}


/*

function changeAll(){
    let element = document.querySelectorAll("button");
    for(int i=0;i<element.length;i++){
        items[i].style.color = "red";
    }
}


for applying this function put the following code in button parenthesis
onclick = "changeAll()"
 */