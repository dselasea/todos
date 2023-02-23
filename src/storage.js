export const getStorage = () => {
  const store = JSON.parse(localStorage.getItem('todoData')) || [];
  return store;
};