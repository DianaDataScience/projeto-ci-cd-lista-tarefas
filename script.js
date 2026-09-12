const form = document.querySelector("#task-form");
const input = document.querySelector("#task-input");
const list = document.querySelector("#task-list");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const task = document.createElement("li");
  task.textContent = input.value;

  list.appendChild(task);
  input.value = "";
});
