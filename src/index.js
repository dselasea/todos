import './style.css';
import Todos from './todo.js';
import { getStorage } from './storage.js';

const clearTodos = document.querySelector('.clear');
const taskList = document.querySelector('.tasks-list');
const todoForm = document.querySelector('.form');
const inputTodos = document.querySelector('.form .input');

let tasks = getStorage();
// Create Todos
const todoList = (tasks) => {
  let htmlList = '';
  for (let i = 0; i < tasks.length; i += 1) {
    htmlList += `<li id=${tasks[i].index}><label class="check-container"><input type="checkbox" >${tasks[i].description}</label><i class="fa fa-ellipsis-v fav"></i><i class="fa fa-trash-o" id="trash"></i></li>`;
  }
  taskList.innerHTML = htmlList;
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
  }
};

taskList.addEventListener('click', deleteTodos);

// Clear all todos
clearTodos.addEventListener('click', (e) => {
  if (e.target.className === 'clear') {
    taskList.innerHTML = '';
    localStorage.clear();
    tasks = getStorage();
  }
});