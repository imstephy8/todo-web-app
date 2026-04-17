const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const clearButton = document.getElementById("clear-btn");
const todoList = document.getElementById("todo-list");

function saveTasks() {
  const tasks = [];
  const listItems = todoList.querySelectorAll("li");

  listItems.forEach(function (item) {
    const span = item.querySelector("span");
    tasks.push({
      text: span.textContent,
      completed: span.classList.contains("completed")
    });
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function createTask(taskText, isCompleted = false) {
  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;

  if (isCompleted) {
    span.classList.add("completed");
  }

  span.addEventListener("click", function () {
    span.classList.toggle("completed");
    saveTasks();
  });

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    li.remove();
    saveTasks();
  });

  li.appendChild(span);
  li.appendChild(deleteButton);
  todoList.appendChild(li);
}

addButton.addEventListener("click", function () {
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  createTask(taskText);
  saveTasks();
  input.value = "";
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addButton.click();
  }
});

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

savedTasks.forEach(function (task) {
  createTask(task.text, task.completed);
});
