let notes = JSON.parse(localStorage.getItem("notes")) || [];

let button = document.querySelector("#btn");

button.addEventListener("click", function () {
    let inputBox = document.querySelector("#inputBox");
    let value = inputBox.value;

    notes.push(value);
    localStorage.setItem("notes", JSON.stringify(notes));
    let li = document.createElement("li");
    li.innerText = value;
    list.appendChild(li);
    inputBox.value = "";
});


let savednotes = localStorage.getItem("notes");

if (savednotes) {
    let notes = JSON.parse(savednotes);

    for (let i = 0; i < notes.length; i++) {
        let li = document.createElement("li");
        li.innerText = notes[i];
        document.querySelector("#list").appendChild(li);
    }
}