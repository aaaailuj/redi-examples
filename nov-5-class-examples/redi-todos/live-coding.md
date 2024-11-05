# Project 2 - Week 3 (3rd Milestone)

## **JavaScript Project: Task Manager Application**

**(DOM Manipulation)**

**Overview**

The **Task Manager Application** will allow users to add, remove, and manage tasks. It provides an excellent foundation for understanding DOM manipulation, dynamic rendering, and asynchronous coding in JavaScript.

Task Manager Project
├── index.html
├── styles.css
└── script.js

**Part 1: DOM Manipulation**

In this first part, we’ll focus on building a basic layout and manipulating elements in the DOM using JavaScript.

**Step 1: Create the HTML Structure**

Create a file named `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Task Manager</title>
<link rel="stylesheet" href="styles.css">
</head>
<body>
<header>
<h1>Task Manager</h1>
</header>
<main>
<section id="taskInputSection">
<input type="text" id="taskInput" placeholder="Enter a new task">
<button id="addTaskButton">Add Task</button>
</section>
<section id="taskListSection">
<h2>Tasks</h2>
<ul id="taskList"></ul>
</section>
</main>
<script src="script.js"></script>
</body>
</html>
```

**Step 2: Style the Layout**

Add a styles.css file to make the layout visually appealing.

```css
/* Basic styling for the Task Manager */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

header {
  background-color: #4CAF50;
  color: white;
  padding: 1em;
  width: 100%;
  text-align: center;
}

#taskInputSection {
  margin: 1em 0;
}

#taskInput {
  padding: 0.5em;
  width: 200px;
  margin-right: 0.5em;
}

#addTaskButton {
  padding: 0.5em 1em;
  cursor: pointer;
}

#taskList {
  list-style-type: none;
  padding: 0;
}

.task-item {
  padding: 0.5em;
  border-bottom: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
}
```

**Step 3: DOM Manipulation with JavaScript**

Add a script.js file to handle adding tasks to the list and removing them as needed.

1.	**Selecting Elements**: We’ll start by selecting the input, button, and task list elements.

2.	**Adding Tasks**: Use createElement and appendChild to dynamically add new tasks to the list.

3.	**Removing Tasks**: Add a “Remove” button to each task for removing tasks from the DOM.

```jsx
// script.js

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
```

**Explained Concepts**

1.	**DOM Selection**: We select elements using getElementById to access the task input, add button, and task list.

2.	**Element Creation**: createElement is used to create new list items and buttons dynamically.

3.	**Adding to DOM**: appendChild attaches each new task item to the task list.

4.	**Event Handling**: We add event listeners to the button and input for task addition and deletion.

5.	**Basic Interactivity**: Clicking “Remove” deletes the task from the DOM.

**Practice Exercise for Teachers**

**Objective**: Introduce students to basic DOM manipulation, element creation, and event handling.

•	**Task**: Extend the code so that each task also displays the time it was added. Use Date to capture and display the current time next to each task.

**Solution**:

```jsx
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const timestamp = new Date().toLocaleTimeString();
    taskItem.textContent = `${taskText} (added at ${timestamp})`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });

    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = "";
  }
}
```

---

---

## **JavaScript Project: Task Manager Application**

**(Dynamic Rendering)**

In this section, we’ll add features to dynamically update the content of our application in response to user interactions, without reloading the page.

**Step 1: Adding Task Editing**

We’ll include an option for editing an existing task.

**Update to script.js**

1.	**Adding an Edit Option**: Each task item will have an “Edit” button that allows the user to modify the task text.

```jsx
// script.js

// Updated function to add a new task with edit functionality
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    // Remove button for deleting the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });

    // Edit button for editing the task
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
      editTask(taskContent);
    });

    // Add content and buttons to the task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear input field
  }
}

// Function to edit the text of a task
function editTask(taskContent) {
  const newText = prompt("Edit your task:", taskContent.textContent);
  if (newText !== null && newText.trim() !== "") {
    taskContent.textContent = newText.trim();
  }
}

addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
```

**Step 2: Task Completion Toggle**

Next, we’ll add a feature to mark a task as completed.

**Update to script.js**

1.	**Creating a Completion Toggle**: We’ll add a click event to toggle a CSS class that visually indicates a task is complete.

```jsx
// Updated function to add a new task with completion toggle
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    // Toggle completion when clicking on taskContent
    taskContent.addEventListener("click", function() {
      taskContent.classList.toggle("completed");
    });

    // Remove button for deleting the task
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });

    // Edit button for editing the task
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
      editTask(taskContent);
    });

    // Append elements to the task item
    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear input field
  }
}
```

**CSS for Completed Task**

To visually indicate that a task is completed, add a CSS rule in styles.css:

```css
/* Styling for completed tasks */
.completed {
  text-decoration: line-through;
  color: gray;
}
```

**Explained Concepts**

1.	**Dynamic Content Update**: The “Edit” button allows users to modify tasks dynamically, demonstrating responsive content changes.

2.	**CSS Class Toggle**: We use the classList.toggle method to apply a completed class, indicating that the task is done.

**Practice Exercise for Teachers**

**Objective**: Allow students to practice creating and editing tasks dynamically.

•	**Task**: Extend the code so that each task item also includes a timestamp showing the time it was marked as completed.

```jsx
// Function to add a new task with a completion timestamp
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const taskItem = document.createElement("li");
    taskItem.className = "task-item";

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;

    // Toggle completion with a timestamp
    taskContent.addEventListener("click", function() {
      taskContent.classList.toggle("completed");
      if (taskContent.classList.contains("completed")) {
        const timestamp = new Date().toLocaleTimeString();
        taskContent.textContent = `${taskText} (completed at ${timestamp})`;
      } else {
        taskContent.textContent = taskText; // Reset text if unmarked
      }
    });

    // Remove and edit buttons
    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", function() {
      taskList.removeChild(taskItem);
    });

    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.addEventListener("click", function() {
      editTask(taskContent);
    });

    taskItem.appendChild(taskContent);
    taskItem.appendChild(editButton);
    taskItem.appendChild(removeButton);
    taskList.appendChild(taskItem);

    taskInput.value = ""; // Clear input field
  }
}
```

---

---

## **JavaScript Project: Task Manager Application**

**(Asynchronous Coding)**

In this part, we’ll implement asynchronous features to fetch, add, and save tasks to mimic server interaction, allowing us to simulate saving data and retrieving it asynchronously.

**Step 1: Simulating Task Fetching**

We’ll start by simulating fetching tasks from a server. This will help illustrate how asynchronous operations work in JavaScript.

**Update to script.js**

1.	**Simulate Fetching Tasks**: Use a mock API call to retrieve a list of tasks and display them in the application.

```jsx
// Simulated async function to fetch tasks
async function fetchTasks() {
  // Simulate server delay
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { text: "Sample Task 1", completed: false },
        { text: "Sample Task 2", completed: true },
      ]);
    }, 1000);
  });
}

// Function to load and display fetched tasks
async function loadTasks() {
  try {
    const tasks = await fetchTasks();
    tasks.forEach((task) => {
      const taskItem = document.createElement("li");
      taskItem.className = "task-item";

      const taskContent = document.createElement("span");
      taskContent.textContent = task.text;
      if (task.completed) {
        taskContent.classList.add("completed");
      }

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
      });

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function () {
        editTask(taskContent);
      });

      taskItem.appendChild(taskContent);
      taskItem.appendChild(editButton);
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);
    });
  } catch (error) {
    console.log("Error loading tasks:", error);
  }
}

// Load tasks when the application starts
loadTasks();
```

**Step 2: Asynchronously Saving New Tasks**

Now, let’s add functionality to save new tasks asynchronously.

1.	**Mock Save Function**: Simulate saving a new task to a server using an async function.

```jsx
// Simulated async function to save a new task
async function saveTask(task) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task saved:", task);
      resolve(task);
    }, 500);
  });
}

// Updated addTask function to save tasks asynchronously
async function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const task = { text: taskText, completed: false };

    try {
      // Save task asynchronously
      await saveTask(task);

      // Create and append the task item to the DOM
      const taskItem = document.createElement("li");
      taskItem.className = "task-item";

      const taskContent = document.createElement("span");
      taskContent.textContent = task.text;

      taskContent.addEventListener("click", function () {
        taskContent.classList.toggle("completed");
      });

      const removeButton = document.createElement("button");
      removeButton.textContent = "Remove";
      removeButton.addEventListener("click", function () {
        taskList.removeChild(taskItem);
      });

      const editButton = document.createElement("button");
      editButton.textContent = "Edit";
      editButton.addEventListener("click", function () {
        editTask(taskContent);
      });

      taskItem.appendChild(taskContent);
      taskItem.appendChild(editButton);
      taskItem.appendChild(removeButton);
      taskList.appendChild(taskItem);

      taskInput.value = ""; // Clear input field
    } catch (error) {
      console.log("Error saving task:", error);
    }
  }
}
```

**Explained Concepts**

1.	**Async Functions**: Both fetchTasks and saveTask are defined as async functions, simulating server requests.

2.	**Awaiting Promises**: In loadTasks and addTask, we use await to pause execution until each asynchronous operation completes.

3.	**Error Handling**: A try-catch block in loadTasks and addTask ensures that any errors in fetching or saving are handled gracefully.

**Practice Exercise for Teachers**

**Objective**: Enable students to understand how to handle asynchronous data fetching and saving in JavaScript.

•	**Task**: Extend the project so that:

•	Tasks that are marked as completed are saved as completed (i.e., the completed property is set to true in the mock save).

•	A loading indicator is displayed while tasks are being fetched.

**Solution**:

1.	**Update** saveTask **to Save Completion Status**:

```jsx
async function saveTask(task) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Task saved:", task);
      resolve(task);
    }, 500);
  });
}
```

2.	**Add Loading Indicator**:

```html
<div id="loading">Loading tasks...</div>
```

3.	**Modify** loadTasks:

```jsx
async function loadTasks() {
  document.getElementById("loading").style.display = "block";
  try {
    const tasks = await fetchTasks();
    document.getElementById("loading").style.display = "none";
    tasks.forEach((task) => {
      addTaskToList(task);
    });
  } catch (error) {
    console.log("Error loading tasks:", error);
  }
}

function addTaskToList(task) {
  // Code to add task to DOM
}
```

---

---

## **JavaScript Project: Task Manager Application**

**(Async/Await)**

In this part, we’ll refine our asynchronous operations using async/await to make our code cleaner and easier to read. This includes managing errors gracefully and ensuring operations run in the right sequence.

**Step 1: Loading Tasks with Async/Await**

We’ll add an async function to load tasks when the application starts, using async/await for better readability.

**Update to script.js**

1.	**Load Tasks on Application Start**: This function will display a loading message, fetch tasks from the server, and then render them in the task list.

```jsx
// Display a loading indicator
const loadingIndicator = document.getElementById("loading");

// Function to load and display tasks
async function loadTasks() {
  loadingIndicator.style.display = "block"; // Show loading indicator
  try {
    const tasks = await fetchTasks();
    loadingIndicator.style.display = "none"; // Hide loading indicator
    tasks.forEach((task) => {
      addTaskToList(task);
    });
  } catch (error) {
    loadingIndicator.style.display = "none"; // Hide loading indicator
    console.error("Error loading tasks:", error
    );
  }
}

// Helper function to add a task to the list
function addTaskToList(task) {
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const taskContent = document.createElement("span");
  taskContent.textContent = task.text;
  if (task.completed) {
    taskContent.classList.add("completed");
  }

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function() {
    taskList.removeChild(taskItem);
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function() {
    editTask(taskContent);
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(editButton);
  taskItem.appendChild(removeButton);
  taskList.appendChild(taskItem);
}

// Load tasks when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);
```

**Step 2: Adding and Saving Tasks with Async/Await**

We’ll also update the addTask function to use async/await, ensuring tasks are saved asynchronously with clear error handling.

1.	**Async** addTask **Function**: This function will asynchronously save the task to the server and add it to the list if the save is successful.

```jsx
// Async function to add a new task
async function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const task = { text: taskText, completed: false };

    try {
      // Save task asynchronously
      await saveTask(task);

      // Add task to the list
      addTaskToList(task);
      taskInput.value = ""; // Clear the input field
    } catch (error) {
      console.error("Error saving task:", error);
    }
  }
}

// Event listener for adding tasks
addTaskButton.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    addTask();
  }
});
```

**Step 3: Handling Task Completion Asynchronously**

Finally, let’s add an async function to save the completed state of a task.

1.	**Async Completion Toggle**: When a task is marked as complete, we’ll save this change asynchronously.

```jsx
// Async function to toggle task completion status
async function toggleCompletion(taskContent, task) {
  task.completed = !task.completed;
  taskContent.classList.toggle("completed");

  try {
    // Asynchronously save the completion status
    await saveTask(task);
  } catch (error) {
    console.error("Error updating task completion:", error);
  }
}

// Updated function to add a task with async completion toggle
function addTaskToList(task) {
  const taskItem = document.createElement("li");
  taskItem.className = "task-item";

  const taskContent = document.createElement("span");
  taskContent.textContent = task.text;
  if (task.completed) {
    taskContent.classList.add("completed");
  }

  // Toggle completion on click with async save
  taskContent.addEventListener("click", function() {
    toggleCompletion(taskContent, task);
  });

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function() {
    taskList.removeChild(taskItem);
  });

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.addEventListener("click", function() {
    editTask(taskContent);
  });

  taskItem.appendChild(taskContent);
  taskItem.appendChild(editButton);
  taskItem.appendChild(removeButton);
  taskList.appendChild(taskItem);
}
```

**Explained Concepts**

1.	**Async/Await for Readability**: By using async/await, we streamline asynchronous operations, making the code easier to follow and maintain.

2.	**Error Handling with Try/Catch**: Wrapping async operations in try/catch ensures any errors are logged, improving robustness.

3.	**Async Task Completion**: We asynchronously save the completion status of each task, ensuring task data stays consistent with user interactions.

**Practice Exercise for Teachers**

**Objective**: Allow students to practice asynchronous updates and async/await in a real application.

•	**Task**: Extend the code so that:

•	Each task can be deleted asynchronously with a simulated server call.

•	A success message briefly appears after a task is saved or completed.

**Solution**:

1.	**Async Remove Function**:

```jsx
// Simulated async function to delete a task
async function deleteTask(taskItem) {
  return new Promise((resolve) => {
    setTimeout(() => {
      taskList.removeChild(taskItem);
      resolve("Task deleted");
    }, 300);
  });
}

removeButton.addEventListener("click", async function() {
  await deleteTask(taskItem);
  showSuccessMessage("Task deleted successfully");
});
```

2.	**Success Message**:

```jsx
// Display a success message
function showSuccessMessage(message) {
  const successDiv = document.createElement("div");
  successDiv.textContent = message;
  successDiv.className = "success-message";
  document.body.appendChild(successDiv);

  setTimeout(() => {
    document.body.removeChild(successDiv);
  }, 2000);
}
```

3.	**CSS for Success Message**:

```css
.success-message {
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4CAF50;
  color: white;
  padding: 10px;
  border-radius: 5px;
}
```

---

---

## **JavaScript Project: Task Manager Application**

**(Further Resources and Practice) - optional**

This section provides additional resources and optional exercises for students to solidify their understanding of JavaScript fundamentals. These resources will help students practice JavaScript essentials, such as objects, functions, and DOM events, which are foundational for developing more advanced applications.

**Further Resources**

1.	**30 Days of JavaScript**

•	Recommended Practice: Complete **Day 7 and 8** from the “30 Days of JavaScript” series to reinforce JavaScript basics.

•	Topics Covered: Functions, Loops, Conditionals.

2.	**Learn-JS Basics Exercises**

•	Suggested Exercises: Practice with the following basics:

•	**Objects**: Understanding JavaScript objects, properties, and methods.

•	**Functions**: Deepen your understanding of function declarations, expressions, and arrow functions.

3.	**Codecademy: Introduction to Functions**

•	Complete the Introduction to Functions module to build confidence in writing and using JavaScript functions.

4.	**Interactive DOM Manipulation**

•	Practice DOM manipulation exercises on W3Schools:

•	**JS Functions**: Explore how JavaScript functions interact with the DOM.

•	**JS Events**: Learn more about event handling.

•	**JS HTML DOM**: Strengthen your DOM selection and manipulation skills.

**Optional Exercises for the Task Manager Application**

To deepen understanding, here are some extended tasks for the Task Manager Application. These can be used as extra practice for students or as additional exercises for the classroom.

**Extended Exercise 1: Task Filtering**

**Objective**: Allow users to filter tasks by their completion status.

•	**Instructions**: Add two buttons, “Show All” and “Show Completed,” to filter the task list.

•	**Solution Outline**:

•	Add two buttons to the HTML.

•	Use JavaScript to toggle the visibility of tasks based on their completed status.

```jsx
// Filter tasks by completion status
function filterTasks(showCompleted) {
  const tasks = taskList.getElementsByTagName("li");
  Array.from(tasks).forEach(taskItem => {
    const isCompleted = taskItem.querySelector("span").classList.contains("completed");
    taskItem.style.display = showCompleted && !isCompleted ? "none" : "block";
  });
}
```

**Extended Exercise 2: Persistent Storage**

**Objective**: Save tasks to local storage so they persist when the page is reloaded.

•	**Instructions**: Update the addTask, removeTask, and toggleCompletion functions to save tasks to local storage. Load tasks from local storage when the app starts.

•	**Solution Outline**:

•	Use localStorage.setItem to save the task list and localStorage.getItem to load it.

```jsx
// Save tasks to local storage
function saveTasksToLocalStorage() {
  const tasks = [];
  taskList.querySelectorAll(".task-item").forEach(taskItem => {
    const text = taskItem.querySelector("span").textContent;
    const completed = taskItem.querySelector("span").classList.contains("completed");
    tasks.push({ text, completed });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Load tasks from local storage
function loadTasksFromLocalStorage() {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTaskToList(task));
}
```

•	**Note**: Call saveTasksToLocalStorage in each function that modifies tasks (addTask, removeTask, toggleCompletion).

**Extended Exercise 3: Drag-and-Drop Task Ordering**

**Objective**: Enable drag-and-drop functionality to reorder tasks.

•	**Instructions**: Use the HTML5 Drag-and-Drop API to allow users to rearrange tasks within the list.

•	**Solution Outline**:

•	Add drag event listeners (dragstart, dragover, drop) to each task item to enable reordering.

```jsx
// Enable dragging for task items
taskList.addEventListener("dragstart", handleDragStart);
taskList.addEventListener("dragover", handleDragOver);
taskList.addEventListener("drop", handleDrop);

// Implement drag event functions
function handleDragStart(event) {
  event.dataTransfer.setData("text/plain", event.target.id);
}

function handleDragOver(event) {
  event.preventDefault();
}

function handleDrop(event) {
  event.preventDefault();
  const draggedId = event.dataTransfer.getData("text/plain");
  const draggedElement = document.getElementById(draggedId);
  taskList.insertBefore(draggedElement, event.target);
}
```

**Summary and Final Thoughts**

This concludes the Task Manager Application project for **JavaScript Milestone 3 (DOM Async)** . This integrated project is designed to cover the essential JavaScript concepts of DOM manipulation, dynamic rendering, asynchronous coding, and async/await handling. By working through these parts and exercises, students will gain a strong foundation in JavaScript and hands-on experience with common web development techniques.