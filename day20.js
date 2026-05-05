let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

document.querySelector("#addBtn").addEventListener("click",function(){
    let input = document.querySelector("#inputBox").value;
    if (input === "") return;
    tasks.push({text:input , completed : false});
    localStorage.setItem("tasks",JSON.stringify(tasks));
    renderTasks();
    document.querySelector("#inputBox").value = "";

});

function renderTasks() {
  let list = document.querySelector("#list");
  list.innerHTML = "";

  tasks.forEach(function (task, index) {
    let li = document.createElement("li");

    li.innerText = task.text;

    if (task.completed) {
      li.style.textDecoration = "line-through";
    }

   
    li.addEventListener("click", function () {
      tasks[index].completed = !tasks[index].completed;
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });

    
    li.addEventListener("dblclick", function () {
      tasks.splice(index, 1);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      renderTasks();
    });

    list.appendChild(li);
  });
}

renderTasks();