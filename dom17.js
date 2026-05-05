let quiz = [
  {
    question: "Capital of India?",
    options: ["Delhi", "Mumbai", "Chennai", "Kolkata"],
    answer: "Delhi"
  },
  {
    question: "2 + 2 = ?",
    options: ["3", "4", "5", "6"],
    answer: "4"
  }
];

let index = 0;
let score  = 0;
function Loadquestion(){
    let q = quiz[index];
    document.querySelector("#question").innerHTML = q.question;

    let buttons = document.querySelectorAll(".option");
    for(let i=0;i<buttons.length;i++){
        buttons[i].innerHTML = q.options[i];
    }
}
Loadquestion();
let buttons = document.querySelectorAll(".option");
for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
        let selected = this.innerHTML;
        if(selected===quiz[index].answer){
            score++;
            document.querySelector("#result").innerHTML = "Correct Answer";
            document.querySelector("#score").innerHTML = "Score = " +score;
        }
        else{
            document.querySelector("#result").innerHTML = "Wrong Answer";
            document.querySelector("#score").innerHTML = "Score = " +score;
        }
        index++;
        if(index<quiz.length){
            Loadquestion();
        }
        else{
            document.querySelector("#question").innerHTML = "Quiz Completed";
            document.querySelector("#score").innerHTML = "final Score " +score;
        }
    });
}

