const itemsArray = JSON.parse(localStorage.getItem('items')) || [];

const createItem = (item) => {
  const { task = '', completed = false } = item || {};
  const index = itemsArray.length;

  const newItem = { task, index, completed };
  itemsArray.push(newItem);

  localStorage.setItem('items', JSON.stringify(itemsArray));
};

document.addEventListener('DOMContentLoaded', () => {
  const enterButton = document.querySelector('#enter');
  const itemInput = document.querySelector('#item');

  enterButton.addEventListener('click', () => {
    createItem({ task: itemInput.value });
  });
});

module.exports = createItem;