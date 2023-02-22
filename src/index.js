import _ from 'lodash';
import './style.css';

const tasks = [
  {
    description: 'create Todo List',
    completed: false,
    index: 1
  },
  {
    description: 'do chores',
    completed: true,
    index: 2
  },
  {
    description: 'sweep compound',
    completed: false,
    index: 3
  },
  {
    description: 'wash car',
    completed: false,
    index: 4
  },
];

const taskList = document.querySelector('.tasks-list');

const todoList = (tasks) => {
  // tasks.map((task) => {
  //   console.log(task.completed, task.index, task.description);
  // })
  let htmlList = '';
  for(let i = 0; i < tasks.length; i += 1){
    htmlList += `<li id=${tasks[i].index}><label class="check-container"><input type="checkbox" checked=${tasks[i].completed} >${tasks[i].description}</label></li>`
  }

  taskList.innerHTML = (htmlList);
};

todoList(tasks);