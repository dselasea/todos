import './style.css';
import Todos from './todo';

let tasks = [];
const clearTodos = document.querySelector('.clear');
// const deleteTodos = document.querySelector('.trash');
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
    e.target.parentElement.remove();
    console.log(tasks.splice(e.target.id, 1));
    // return tasks.splice(e.target.id, 1);
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
      tasks = [];
    }
})

