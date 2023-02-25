import './interaction.js';
import getStorage from './storage.js';

export function updateCheck(local, checked, id) {
  local.forEach((task, index) => {
    if(Number(id) === index + 1){
      task.completed = checked;
    }
  })
  localStorage.setItem('todoData', JSON.stringify(local));
};

export function clearCompleted(local) {
  let store = getStorage();
  let complete = local.filter((task) => {
    return task.completed === false;
  })
  
  complete.forEach((task, index) => {
    task.index = index + 1;
    return task.index;
  });

  localStorage.setItem('todoData', JSON.stringify(complete));
};
