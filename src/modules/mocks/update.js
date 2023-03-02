/* eslint-disable operator-linebreak */
/* eslint-disable no-unused-expressions */
import updateItems from './updateItems.js';

const update = (index) => {
  let todos = [];

  todos = JSON.parse(localStorage.getItem('todoData')) || [];

  const update = todos.filter((todo) => {
    todo.index === index && (item.description = "Pray");
    return todo;
  });
  localStorage.setItem('localItem', JSON.stringify(update));

  updateItems();
};

export default update;