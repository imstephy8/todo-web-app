const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

addButton.addEventListener("click", function () {
  const taskText = input.value.trim();

  if (taskText === "") {
    return;
  }

  const li = document.createElement("li");
  li.textContent = taskText;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";

  deleteButton.addEventListener("click", function () {
    li.remove();
  });

  li.appendChild(deleteButton);
  todoList.appendChild(li);
  input.value = "";
});
