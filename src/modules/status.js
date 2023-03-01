// import { itemsArray } from '../index.js';

const updateCompletedStatus = (index, completed) => {
  const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  const item = itemsArray[index];
  if (typeof item === 'string') {
    itemsArray[index] = { task: item, index, completed };
  } else {
    item.completed = completed;
  }

  localStorage.setItem('items', JSON.stringify(itemsArray));
};
module.exports = updateCompletedStatus;
