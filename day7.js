//Student Marking System

let students =[
    { name:"Eina" , marks:55 },
    { name:"Meena" , marks:42 },
    { name:"Deeka" , marks:48}
];

for(let i = 0; i<students.length;i++){
    if(students[i].marks >=50){
        console.log(students[i].name+" is passed");
    }
    else{
        console.log(students[i].name+" is failed");
    }
}


// Shopping Cart total 

let cart = [
    {name:"Tshirt", price:450},
    {name:"Bottle", price:180},
    {name:"Groceries", price:90}
]
let total  = 0;
for(let i =  0;i<cart.length;i++){
    total += total + cart[i].price;
}

console.log("Total Price : "+total);


// simple number guess


