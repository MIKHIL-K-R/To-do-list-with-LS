// Initialize localStorage-based database
function getTasksFromDB() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  return tasks;
}

function saveTasksToDB(tasks) {
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function displayTasks() {
  const tasks = getTasksFromDB();
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = ''; // Clear existing tasks

  tasks.forEach((task, index) => {
    const listItem = document.createElement('li');
    if (task.completed) listItem.classList.add('completed');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = task.text;
    taskSpan.onclick = () => toggleTask(index);

    const deleteSpan = document.createElement('span');
    deleteSpan.textContent = '❌';
    deleteSpan.className = 'delete';
    deleteSpan.onclick = () => deleteTask(index);

    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteSpan);
    taskList.appendChild(listItem);
  });
}

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const tasks = getTasksFromDB();
  tasks.push({ text: taskText, completed: false });
  saveTasksToDB(tasks);

  taskInput.value = '';
  displayTasks();
}

function toggleTask(index) {
  const tasks = getTasksFromDB();
  tasks[index].completed = !tasks[index].completed;
  saveTasksToDB(tasks);
  displayTasks();
}

function deleteTask(index) {
  const tasks = getTasksFromDB();
  tasks.splice(index, 1);
  saveTasksToDB(tasks);
  displayTasks();
}

// Display tasks on page load
document.addEventListener('DOMContentLoaded', displayTasks);
