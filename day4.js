// Simple Calculator using function 

function add(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

function mul(a,b){
    return a*b;
}

function div(a,b){
    return a/b;
}

let a = Number(prompt("Enter First number"));
let b = Number(prompt("Enter Second number"));

console.log("Addition : "+ add(a,b));
console.log("Addition : "+ sub(a,b));
console.log("Addition : "+ mul(a,b));
console.log("Addition : "+ div(a,b));
