const deleteItem = require('./deleteTodo.js');

describe('deleteItem', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should remove an item from localStorage and reload the window', () => {
    const mockReload = jest.fn();
    window.location.reload = mockReload;
    const items = ['item1', 'item2', 'item3'];
    localStorage.setItem('items', JSON.stringify(items));
    const indexToRemove = 1;
    deleteItem(indexToRemove);
    mockReload();
    const updatedItems = JSON.parse(localStorage.getItem('items'));
    expect(updatedItems).toEqual(['item1', 'item3']);
    expect(mockReload).toHaveBeenCalled();
  });
});
