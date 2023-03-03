function reassignIndex(items){
  let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];
  itemsArray = items.forEach((item, index) => {
    item.index = index + 1;
    return item.index;
  });
  localStorage.setItem('items', JSON.stringify(itemsArray));

}

module.exports = reassignIndex;