const todoList = (tasks) => {
  let todos = [];
  todos = JSON.parse(localStorage.getItem('todoData')) || [];
  let count = 0;
  for (let i = 0; i < tasks.length; i += 1) {
    count += 1;
    tasks[i].index = count;
  }

  let htmlList = '';
  for (let i = 0; i < tasks.length; i += 1) {
    let isCompleted;
    if (tasks[i].completed === true) {
      isCompleted = 'checked';
    }
    htmlList += `
    <li id=${tasks[i].index} draggable="true">
    <label class="check-container">
    <input class="input-check" id=${tasks[i].index} type="checkbox" ${isCompleted} />
    </label>
    <span class="span" id=${tasks[i].index}>${tasks[i].description}</span>
    <i class="fa fa-ellipsis-v fav" ></i>
    <i class="fa fa-trash-o" id="trash"></i>
    </li>`;
  }
  taskList.innerHTML = htmlList;
  
  localStorage.setItem('todoData', JSON.stringify(todos));
};

export default todoList;