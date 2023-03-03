const updateCompletedStatus = require('./updateTask.js');

describe('updateCompletedStatus function', () => {
  const localStorageMock = (() => {
    let store = {};
    return {
      getItem: (key) => store[key] || null,
      setItem: (key, value) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      },
    };
  })();

  Object.defineProperty(window, 'localStorage', { value: localStorageMock });

  beforeEach(() => {
    localStorageMock.clear();
  });

  test('should update the completed status of an item at a given index', () => {
    const initialItemsArray = [{ task: 'Task 1', index: 0, completed: false }];
    localStorageMock.setItem('items', JSON.stringify(initialItemsArray));
    const index = 0;
    const completed = true;
    updateCompletedStatus(index, completed);

    const updatedItemsArray = JSON.parse(localStorageMock.getItem('items'));
    expect(updatedItemsArray[index].completed).toBe(completed);
  });

  test('should update the completed status of a string item at a given index', () => {
    const initialItemsArray = ['Task 1'];
    localStorageMock.setItem('items', JSON.stringify(initialItemsArray));
    const index = 0;
    const completed = true;
    updateCompletedStatus(index, completed);
    const updatedItemsArray = JSON.parse(localStorageMock.getItem('items'));
    expect(updatedItemsArray[index].completed).toBe(completed);
  });

  test('should do nothing if the index is out of bounds', () => {
    const initialItemsArray = [{ task: 'Task 1', index: 0, completed: false }];
    localStorageMock.setItem('items', JSON.stringify(initialItemsArray));
    const index = 1;
    const completed = true;
    updateCompletedStatus(index, completed);
    const updatedItemsArray = JSON.parse(localStorageMock.getItem('items'));
    expect(updatedItemsArray).toEqual(initialItemsArray);
  });
});
