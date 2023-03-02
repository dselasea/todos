/* eslint-disable no-unused-expressions */
const clearCompleted = () => {
  let todos = [];

  taskList = JSON.parse(localStorage.getItem('todoData')) || [];
  const complete = todos.filter((todo) => todo.completed === false);

  localStorage.setItem('todoData', JSON.stringify(complete));
  window.location.reload();
}

export default clearCompleted;