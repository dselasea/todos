import './interaction.js';

export function updateCheck(local, checked, id) {
  local.forEach((task, index) => {
    if(Number(id) === index + 1){
      task.completed = checked;
      console.log(task.completed, id);
    }
  })
  localStorage.setItem('todoData', JSON.stringify(local));
};

export function clearCompleted(local, checked) {
  local.filter((task, index) => {
    if(Number(id) === index + 1){
      task.completed = checked;
      console.log(task.completed, id);
    }
  })
  localStorage.setItem('todoData', JSON.stringify(local));
};