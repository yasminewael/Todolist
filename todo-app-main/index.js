const input = document.querySelector("input");
const PlusButton = document.querySelector(".add");
const todoList = document.querySelector(".todo-list");
const count = document.querySelector(".count-items");
const mainElement = document.querySelector(".content-item");
const sun = document.querySelector(".switch");
const check = document.querySelector(".check");

window.onload = function () {
  input.focus();
};
////input
PlusButton.onclick = function () {
  if (input.value === "" || input === null) {
    swal("Missing Information", "Task Field is Required!", "info");
  } else {
    let noTasksMsg = document.querySelector(".no-tasks-message");

    if (document.body.contains(document.querySelector(".no-tasks-message"))) {
      noTasksMsg.remove();
    }
    let mainElement = document.createElement("div");
    let check = document.createElement("check");
    let cross = document.createElement("cross");

    check.className = "check";
    cross.className = "cross";

    mainElement.appendChild(check);
    mainElement.appendChild(cross);

    let text = document.createTextNode(input.value);
    mainElement.appendChild(text);
    mainElement.className = "content-item";

    todoList.appendChild(mainElement);
    input.value = "";
    input.focus();

    calcTasks();
  }
};

/////delete button
document.addEventListener("click", function (e) {
  if (e.target.className == "cross") {
    e.target.parentNode.remove();
  }

  //check number of tasks
  if (todoList.childElementCount == 0) {
    noTasksMsg();
  }

  //task finish
  document.onclick = function (e) {
    if (e.target.classList.contains("check")) {
      document.querySelector(".content-item").classList.toggle("finished");

      document.querySelector(".check").style.backgroundImage =
        "linear-gradient(to right,192 100% 67%,blue)";
    }
  };
  calcTasks();
});

noTasksMsg = () => {
  let noTasksElement = document.createElement("span");
  let noTasksShow = document.createTextNode("No Tasks To Show");
  noTasksElement.appendChild(noTasksShow);
  noTasksElement.className = "no-tasks-message";
  todoList.appendChild(noTasksElement);
};

calcTasks = () => {
  count.innerHTML =
    document.querySelectorAll(".todo-list .content-item").length + " Items";
};

// function calcTasks(){
// activeTasks.addEventListener('click', function(){
//   count.innerHTML = document.querySelectorAll('.todo-list .content-item').length
// })
// }

sun.onclick = function () {
  document.querySelector(".header").style.backgroundImage =
    "url(./images/bg-desktop-light.jpg)";
  document.querySelector("body").style.backgroundColor = "hsl(236, 33%, 92%)";
  document.querySelector(".create-todo").style.backgroundColor =
    "hsl(0, 0%, 98%)";
  document.querySelector(".actions").style.backgroundColor = "hsl(0, 0%, 98%)";
  todoList.style.cssText =
    "background-color:hsl(0, 0%, 98%); color:hsl(237, 14%, 26%);";
  input.style.cssText =
    "background-color: hsl(0, 0%, 98%); color:hsl(237, 14%, 26%)";
  sun.style.cssText = "background:url(./images/icon-moon.svg) no-repeat";
};
