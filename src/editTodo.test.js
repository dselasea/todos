const activateEditListeners = require('./editTodo.js');

document.body.innerHTML = `
  <div>
    <button class="editBtn">Edit</button>
    <div class="update-controller" style="display: none;"></div>
    <div class="input-controller">
      <textarea disabled></textarea>
    </div>
  </div>
  <div>
    <button class="editBtn">Edit</button>
    <div class="update-controller" style="display: none;"></div>
    <div class="input-controller">
      <textarea disabled></textarea>
    </div>
  </div>
`;
describe('activateEditListeners', () => {
  test('clicking edit button should enable textarea and show update controller', () => {
    activateEditListeners();

    const editBtns = document.querySelectorAll('.editBtn');
    editBtns[0].click();

    const updateControllers = document.querySelectorAll('.update-controller');
    const inputs = document.querySelectorAll('.input-controller textarea');
    expect(updateControllers[0].style.display).toBe('flex');
    expect(editBtns[0].style.display).toBe('none');
    expect(inputs[0].disabled).toBe(false);
  });
});
