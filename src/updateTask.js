function updateCompletedStatus(index, completed) {
  const storedItems = localStorage.getItem('items');
  const itemsArray = storedItems ? JSON.parse(storedItems) : [];

  const item = itemsArray[index];
  if (typeof item === 'string') {
    itemsArray[index] = { task: item, index, completed };
  } else if (item) {
    item.completed = completed;
  }

  localStorage.setItem('items', JSON.stringify(itemsArray));
}

module.exports = updateCompletedStatus;
