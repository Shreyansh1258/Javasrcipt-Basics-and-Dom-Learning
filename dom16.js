let images = [
    "https://cdn2.thecatapi.com/images/MTY3ODIyMQ.jpg",
    "https://cdn2.thecatapi.com/images/MTY3ODIyNw.jpg" ,
    "https://cdn2.thecatapi.com/images/MTY3ODIyOA.jpg" ,
    "https://cdn2.thecatapi.com/images/MTY3ODIyOQ.jpg" ,
    "https://cdn2.thecatapi.com/images/MTY3ODIzMA.jpg"
];

let index = 0;
let slider = document.querySelector("#slider");

slider.src  = images[index];

document.querySelector("#next").addEventListener("click",function(){
    index++;
    if(index>=images.length){
        index = 0;
    }
    slider.src = images[index];
});

document.querySelector("#prev").addEventListener("click",function(){
    index--;
    if(index<0){
        index = images.length-1;
    }
    slider.src = images[index];
});