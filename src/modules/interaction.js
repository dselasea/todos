import Todos from './todo.js';
import getStorage from './storage.js';
import { updateCheck, clearCompleted, updateStorage } from './checkTodos.js';

// const clearTodos = document.querySelector('.clear');
const taskList = document.querySelector('.tasks-list');
const todoForm = document.querySelector('.form');
const inputTodos = document.querySelector('.form .input');
const clearComplete = document.querySelector('.clear');

const tasks = getStorage();

// Create Todos
const todoList = (tasks) => {
  let htmlList = '';
  for (let i = 0; i < tasks.length; i += 1) {
    let isCompleted;
    if(tasks[i].completed === true){
      isCompleted = 'checked';
    }
    htmlList += `
    <li id=${tasks[i].index}>
        <label class="check-container">
        <input class="input-check" id=${tasks[i].index} type="checkbox" ${isCompleted} />
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

// Call delete todo function
taskList.addEventListener('click', deleteTodos);

// Edit Content
taskList.addEventListener('click', (e) => {
  if (e.target.className === 'span') {
    e.target.contentEditable = true;
  }
});

// Check content 
taskList.addEventListener('click', (e) => {
  const ch = document.querySelectorAll('.input-check');
  ch.forEach((c) => {
    c.addEventListener('change', () => {
      if(e.target.className === 'input-check'){
        updateCheck(tasks, e.target.checked, e.target.id);
      }
    })
  })
})

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

// Clear completed
clearComplete.addEventListener('click', () => {
  let tasks = getStorage();
  clearCompleted(tasks);
})

clearComplete.addEventListener('click', (e) => {
  const checks = document.querySelectorAll('.input-check');
  checks.forEach((check) => {
    if(check.checked){
      check.parentElement.parentElement.remove();
    }  
  });
})