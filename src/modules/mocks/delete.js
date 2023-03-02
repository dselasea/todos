function deleteFromStorage(index) {
  let todos = [];
  const removeTodos = localStorage.getItem('todoData');
  todos = JSON.parse(removeTodos);
      tasks.splice(index, 1);

  localStorage.setItem('todoData', JSON.stringify(todos));
}

export default deleteFromStorage;