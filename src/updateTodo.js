function updateTodo(index, completed) {
  const tasksItems = localStorage.getItem('items');
  const todoItems = tasksItems ? JSON.parse(tasksItems) : [];
  const updateTodo = todoItems[index];

  if(updateTodo === 'string'){
    todoItems[index] = {task: updateTodo, index, completed};
  } else if (updateTodo){
    updateTodo.completed = completed;
  }
  localStorage.setItem('items', JSON.stringify(todoItems));

}

module.exports = updateTodo;