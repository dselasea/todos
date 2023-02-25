import './interaction.js';
// import getStorage from './storage.js';

let tasks = JSON.parse(localStorage.getItem('todoData'));

export function updateCheck(checked, id) {
  tasks.forEach((task, index) => {
    if(Number(id) === index + 1){
      task.completed = checked;
      console.log(task.completed, id);
    }
  })
};