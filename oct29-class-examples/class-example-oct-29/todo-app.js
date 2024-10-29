
document.addEventListener("DOMContentLoaded", () => {
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  addButton.addEventListener("click", () => {
    console.log("clicked");
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
