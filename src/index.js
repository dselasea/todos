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
    htmlList += `<li id=${tasks[i].index}><label class="check-container"><input type="checkbox" >${tasks[i].description}</label><i class="fa fa-ellipsis-v fav"></i><i class="fa fa-trash-o trash"></i></li>`;
  }
  taskList.innerHTML = htmlList;
};

// Delete Todos 
const deleteTodos = (e) => {
  const indexTodo = e.target.parentElement.id;
  if(e.target.className = 'trash'){
    e.target.parentElement.remove();
    deleteFromStorage(indexTodo);
  }
}

// Delete from storage
const deleteFromStorage = (id) => {
  tasks.filter((task, index) => {
    if(task.index === Number(id)) {
      console.log(task.index, Number(id));
      tasks.splice(index, 1);
    }
  });
  localStorage.setItem('todoData', JSON.stringify(tasks));
}

taskList.addEventListener('click', deleteTodos);



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