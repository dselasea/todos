import './style.css';
import Todos from './todo';
import { getStorage } from './storage.js';


let tasks = getStorage();

window.addEventListener('load', () => {
  todoList(tasks);
})

const clearTodos = document.querySelector('.clear');
const taskList = document.querySelector('.tasks-list');
const todoForm = document.querySelector('.form');
const inputTodos = document.querySelector('.form .input');

// Enter to submit
todoForm.addEventListener('submit', (e) => {
  let id = tasks.length + 1;
  const todos = new Todos(id, inputTodos.value, false);
  if(e.key = 'Enter'){
    if(inputTodos.value){
      tasks.push(todos);
      localStorage.setItem('todoData', JSON.stringify(tasks));
      clearInput();
      todoList(tasks);
    }
  }
  e.preventDefault();
})

const todoList = (tasks) => {
  let htmlList = '';
  for (let i = 0; i < tasks.length; i += 1) {
    htmlList += `<li><label class="check-container"><input type="checkbox" >${tasks[i].description}</label><i class="fa fa-ellipsis-v fav"></i><i class="fa fa-trash-o trash" id=${tasks[i].index}></i></li>`;
  }
  taskList.innerHTML = htmlList;
};

// Delete Todos 
todoForm.addEventListener('click', (e) => {
  if(e.target.id){
    let index = e.target.id;
    e.target.parentElement.remove();
    const newArray = tasks.filter((task) =>  task.index !== index);
    localStorage.setItem('todoData', JSON.stringify(newArray));
  }
})

// Clear input value
const clearInput = () => {
  inputTodos.value = '';
}

// Clear all todos 
clearTodos.addEventListener('click', (e) => {
    if(e.target.className === 'clear'){
      taskList.innerHTML = '';
      localStorage.clear();
      tasks = getStorage();
    }
})