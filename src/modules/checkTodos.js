import './interaction.js';
import getStorage from './storage.js';

let tasks = getStorage();

export function updateCheck(checked, id) {
  tasks.forEach((task, index) => {
    if(Number(id) === index + 1){
      task.completed = checked;
      console.log(task.completed, id);
    }
  })
  localStorage.setItem('todoData', JSON.stringify(tasks));
};
