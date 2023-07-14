// Cache frequently accessed DOM elements
var addTaskForm = document.getElementById("add-task-form");
var taskInput = document.getElementById("task-input");
var pendingTasksContainer = document.getElementById("pending-tasks");
var completedTasksContainer = document.getElementById("completed-tasks");

// Event listener for form submission
addTaskForm.addEventListener("submit", function(event) {
  event.preventDefault();
  var taskText = taskInput.value.trim();
  
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  }
});

// Function to create a new task item
function addTask(taskText) {
  var taskItem = document.createElement("li");
  taskItem.classList.add("task");

  var taskSpan = document.createElement("span");
  taskSpan.innerText = taskText;
  taskSpan.classList.add("task");
  taskItem.appendChild(taskSpan);

  var buttonsDiv = document.createElement("div");
  buttonsDiv.classList.add("buttons");

  var completeButton = createButton("Complete", "&#10004;", "complete", function() {
    markAsComplete(taskItem);
  });
  buttonsDiv.appendChild(completeButton);

  var deleteButton = createButton("Delete", "&#10008;", "delete", function() {
    deleteTask(taskItem);
  });
  buttonsDiv.appendChild(deleteButton);

  taskItem.appendChild(buttonsDiv);

  pendingTasksContainer.appendChild(taskItem);
}

// Function to create a button element
function createButton(text, html, className, clickHandler) {
  var button = document.createElement("button");
  button.innerText = text;
  button.innerHTML = html;
  button.classList.add(className);
  button.addEventListener("click", clickHandler);
  return button;
}

// Function to mark a task as complete
function markAsComplete(taskItem) {
  taskItem.classList.add("completed");
  completedTasksContainer.appendChild(taskItem);
  taskItem.querySelector("button.complete").remove();
}

// Function to delete a task
function deleteTask(taskItem) {
  taskItem.remove();
}
