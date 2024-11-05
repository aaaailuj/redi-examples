// Selecting the necessary elements
const taskInput = document.getElementById("taskInput");
const addTaskButton = document.getElementById("addTaskButton");
const taskList = document.getElementById("taskList");
const fetchTasksButton = document.getElementById('fetchTasks')

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

async function fetchTasks() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos')
  const data = await response.json()

  data.forEach((task) => {
    const listItem = document.createElement('li')
    listItem.innerHTML = `<p> ${task.completed ? '✅' : '❌'} <strong>${task.title}</strong></p>`
    taskList.appendChild(listItem)
  });

}


// Event listener for the "Add Task" button
addTaskButton.addEventListener("click", addTask);
fetchTasksButton.addEventListener("click", fetchTasks)

// Optional: Allow adding tasks by pressing "Enter"
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
