function addTask() {
  const taskInput = document.getElementById('taskInput');
  console.log('taskInput:', taskInput); // Logs the input element

  const taskText = taskInput.value.trim();
  console.log('taskText:', taskText); // Logs the trimmed task text

  if (taskText === '') {
    console.log('Task is empty. No task added.');
    return;
  }

  const taskList = document.getElementById('taskList');
  console.log('taskList:', taskList); // Logs the UL element

  const listItem = document.createElement('li');
  console.log('listItem:', listItem); // Logs the newly created LI element

  const taskSpan = document.createElement('span');
  taskSpan.textContent = taskText;
  console.log('taskSpan:', taskSpan); // Logs the span element with task text

  const deleteSpan = document.createElement('span');
  deleteSpan.textContent = '❌';
  deleteSpan.className = 'delete';
  console.log('deleteSpan:', deleteSpan); // Logs the span element with delete icon

  taskSpan.onclick = () => listItem.classList.toggle('completed');
  deleteSpan.onclick = () => {
    taskList.removeChild(listItem);
    console.log('Task deleted:', listItem);
  };

  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteSpan);
  taskList.appendChild(listItem);

  taskInput.value = ''; // Clear the input field
}
