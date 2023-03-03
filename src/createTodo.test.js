const createItem = require('./createTodo.js');

describe('createItem', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('should add an item to localStorage and reload the page', () => {
    const mockReload = jest.fn();
    window.location.reload = mockReload;

    const item = { task: 'New task', index: 0, completed: false };
    createItem(item);
    mockReload();
    const updatedItems = JSON.parse(localStorage.getItem('items'));

    expect(updatedItems.length).toBe(1);
    expect(updatedItems[0]).toEqual(item);
    expect(mockReload).toHaveBeenCalled();
  });
});
