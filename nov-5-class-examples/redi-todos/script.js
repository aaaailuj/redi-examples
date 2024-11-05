// Selecting the necessary elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    // Create a new task item
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.textContent = taskText;

    // Create a "Remove" button for the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      taskList.removeChild(taskItem); // Remove the task item
    });

    // Append the button to the task item and the item to the list
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    // Clear the input field
    taskInput.value = "";
  }
}

// Event listener for the "Add Task" button
addTaskButton.addEventListener("click", addTask);

// Optional: Allow adding tasks by pressing "Enter"
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
