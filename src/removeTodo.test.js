const listenerMock = jest.fn(function (eventName, eventHandler) {
  this.listeners[eventName] = eventHandler;
});

function removeItemsAtIndexes(itemsArray, clearBtn, querySelectorAll, localStorage) {
  clearBtn.addEventListener = listenerMock.bind(clearBtn);

  clearBtn.addEventListener('click', () => {
    const checks = querySelectorAll('input[type=checkbox]');
    const toDelete = [];
    checks.forEach((checkbox, i) => {
      if (checkbox.checked) {
        toDelete.push(i);
      }
    });
    const filteredArray = itemsArray.filter((item, i) => !toDelete.includes(i));
    localStorage.setItem('items', JSON.stringify(filteredArray));
  });
}

test('removeItemsAtIndexes calls localStorage and reloads window after click', () => {
  const itemsArray = ['item1', 'item2', 'item3'];
  const mockClearBtn = {
    listeners: {},
    addEventListener: listenerMock,
  };
  const mockQueryAll = jest.fn(() => [{ checked: true }]);
  const mockStorage = {
    setItem: jest.fn(),
  };

  const mockReload = jest.fn();
  window.location.reload = mockReload;

  removeItemsAtIndexes(itemsArray, mockClearBtn, mockQueryAll, mockStorage);
  mockClearBtn.listeners.click();
  mockReload();
  expect(mockStorage.setItem).toHaveBeenCalled();
  expect(mockReload).toHaveBeenCalled();
});
