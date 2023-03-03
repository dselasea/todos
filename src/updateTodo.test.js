const updateList = require('./updateTodo.js');

describe('updateList', () => {
  let localStorageMock;

  beforeEach(() => {
    localStorageMock = {
      store: {},
      getItem: jest.fn((key) => this.store[key] || null),
      setItem: jest.fn((key, value) => {
        this.store[key] = value.toString();
      }),
      clear: jest.fn(() => {
        this.store = {};
      }),
    };

    Object.defineProperty(window, 'localStorage', { value: localStorageMock });
    localStorageMock.clear();
  });

  test('should not update completed status', () => {
    const todoUpdate = [{ task: 'Task 1', index: 0, completed: false }];
    localStorageMock.setItem('items', JSON.stringify(todoUpdate));
    const completed = true;
    const index = 1;
    updateList(index, completed);

    const todoUpdated = JSON.parse(localStorageMock.getItem('items'));

    expect(todoUpdated).toEqual(todoUpdate);
  });

  test('should update completed status', () => {
    const todoUpdate = [{ task: 'Task 1', index: 0, completed: false }];
    localStorageMock.setItem('items', JSON.stringify(todoUpdate));
    const completed = true;
    const index = 0;
    updateList(index, completed);

    const todoUpdated = JSON.parse(localStorageMock.getItem('items'));

    expect(todoUpdated[index].completed).toBe(completed);
  });

  test('should update completed status of a given index', () => {
    const todoUpdate = [{ task: 'Task 1', index: 0, completed: false }];
    localStorageMock.setItem('items', JSON.stringify(todoUpdate));
    const completed = true;
    const index = 0;
    updateList(index, completed);

    const todoUpdated = JSON.parse(localStorageMock.getItem('items'));

    expect(todoUpdated[index].completed).toBe(completed);
  });
});