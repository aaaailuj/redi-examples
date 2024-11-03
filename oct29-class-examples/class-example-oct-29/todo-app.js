
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", (event) => {
    console.log(event);
    const todoText = document.getElementById("textfield").value;
    const newItem = createListItem(todoText);
    todoList.appendChild(newItem);
  });
});

function createListItem(text) {
  const li = document.createElement("li");
  li.textContent = text;
  return li;
}
