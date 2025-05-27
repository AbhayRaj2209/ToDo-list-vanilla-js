document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
  const input = document.getElementById('task-input');
  const taskText = input.value.trim();

  if (taskText === '') {
    alert('Please enter a task.');
    return;
  }

  const taskList = document.getElementById('task-list');

  // Create task item
  const li = document.createElement('li');
  li.className = 'task-item';

  // Add text
  const span = document.createElement('span');
  span.textContent = taskText;
  span.addEventListener('click', () => {
    li.classList.toggle('completed');
  });

  // Remove button
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-btn';
  removeBtn.innerHTML = '&times;';
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(li);
  });

  li.appendChild(span);
  li.appendChild(removeBtn);
  taskList.appendChild(li);

  input.value = ''; // Clear input
}
