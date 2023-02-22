import './style.css';
import Todos from './todo';

let tasks = [];
const clearTodos = document.querySelector('.clear');
const taskList = document.querySelector('.tasks-list');
const todoForm = document.querySelector('.form');
const inputTodos = document.querySelector('.form .input');

todoForm.addEventListener('submit', (e) => {
  let id = tasks.length + 1;
  const todos = new Todos(id, inputTodos.value, false);
  if(e.key = 'Enter'){
    if(inputTodos.value){
      tasks.push(todos);
      clearInput();
      todoList(tasks);
    }
  }
  e.preventDefault();
})

const todoList = (tasks) => {
  let htmlList = '';
  for (let i = 0; i < tasks.length; i += 1) {
    htmlList += `<li id=${tasks[i].index}><label class="check-container"><input type="checkbox" >${tasks[i].description}</label><i class="fa fa-ellipsis-v fav"></i></li>`;
  }

  taskList.innerHTML = htmlList;
};

// Clear Todos
const clearInput = () => {
  inputTodos.value = '';
}

// Clear all todos 
clearTodos.addEventListener('click', (e) => {
    console.log(e.target.className);
    if(e.target.className === 'clear'){
      taskList.innerHTML = '';
      tasks = [];
    }
})

