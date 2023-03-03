const deleteItem = require('./deleteTodo.js');
const reassignIndex = require('./reassignIndex.js');

describe('reassign Index', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should reassign all indexes from the local storage', () => {
    const items = [{index: 1, item: 'Item 1'}, {index: 2, item: 'Item 2'}, {index: 3, item: 'Item 3'}];
    localStorage.setItem('items', JSON.stringify(items));
    const indexToRemove = 2;
    deleteItem(indexToRemove);
    mockReload();
    reassignIndex(items);
    const updateItems = JSON.parse(localStorage.getItem('items'));
    expect(updateItems).toEqual([{index: 1, item: 'Item 1'}, {index: 2, item: 'Item 3'}]);
  })
})