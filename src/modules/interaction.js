import Todos from './todo.js';
import getStorage from './storage.js';

const taskList = document.querySelector('.tasks-list');
const todoForm = document.querySelector('.form');
const inputTodos = document.querySelector('.form .input');

const tasks = getStorage();

// Create Todos
const todoList = (tasks) => {
  let htmlList = '';
  const editableInput = document.createElement('input');
  editableInput.id = 'text';
  for (let i = 0; i < tasks.length; i += 1) {
    htmlList += `
    <li id=${tasks[i].index}>
      <label class="check-container">
        <input id="input" type="checkbox" ${tasks[i].completed} />
        </label>
        <span class="span" id=${tasks[i].index}>${tasks[i].description}</span>
      <i class="fa fa-ellipsis-v fav"></i>
      <i class="fa fa-trash-o" id="trash"></i>
    </li>`;
  }
  taskList.innerHTML = htmlList;
};

// // ReassignIndex
const reAssignIndex = (tasks) => {
  tasks.forEach((task, index) => {
    task.index = index + 1;
    return task.index;
  });
  localStorage.setItem('todoData', JSON.stringify(tasks));
  todoList(tasks);
};

window.addEventListener('load', () => {
  todoList(tasks);
});

// Clear input value
const clearInput = () => {
  inputTodos.value = '';
};

// Enter to submit
todoForm.addEventListener('submit', (e) => {
  const id = tasks.length + 1;
  const todos = new Todos(id, inputTodos.value, false);
  if (inputTodos.value) {
    tasks.push(todos);
    localStorage.setItem('todoData', JSON.stringify(tasks));
    clearInput();
    todoList(tasks);
  }
  e.preventDefault();
});

// Delete from storage
const deleteFromStorage = (id) => {
  tasks.forEach((task, index) => {
    if (task.index === Number(id)) {
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('todoData', JSON.stringify(tasks));
};

// Delete Todos
const deleteTodos = (e) => {
  const indexTodo = e.target.parentElement.id;
  if (e.target.id === 'trash') {
    e.target.parentElement.remove();
    deleteFromStorage(indexTodo);
    reAssignIndex(tasks);
  }
};

// Edit Content
taskList.addEventListener('click', (e) => {
  if (e.target.className === 'span') {
    e.target.contentEditable = true;
  }
});

// Save Content to Local Storage
taskList.addEventListener('dblclick', (e) => {
  tasks.forEach((task, index) => {
    if (e.target.className === 'span' && Number(e.target.id) === index + 1) {
      e.target.contentEditable = false;
      task.description = e.target.textContent;
    }
  });
  localStorage.setItem('todoData', JSON.stringify(tasks));
});

taskList.addEventListener('click', deleteTodos);
