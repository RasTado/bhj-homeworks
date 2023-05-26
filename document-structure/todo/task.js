const task = document.getElementById("tasks");
const taskI = document.getElementById("task__input");
const taskF = document.getElementById("tasks__form");

taskF.addEventListener("submit", (sub) => {
  sub.preventDefault();
  let newt = newTask(taskI);
  task.appendChild(newt);
  taskI.value = "";
});

function newTask(t) {
  let taskCont = document.createElement("div");
  taskCont.classList.add("task");

  let taskText = document.createElement("div");
  taskText.classList.add("task__title");
  taskText.textContent = t.value;

  let taskDel = document.createElement("a");

  taskDel.classList.add("task__remove");
  taskDel.innerHTML = "&times;";
  taskDel.setAttribute("href", "#");

  taskDel.addEventListener("click", (ev) => {
    ev.target.parentElement.remove();
  });

  taskCont.appendChild(taskText);
  taskCont.appendChild(taskDel);

  return taskCont;
}
