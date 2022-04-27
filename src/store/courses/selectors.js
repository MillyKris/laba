export const fetchItems = (store) => {
  const { dispatch } = store;
  dispatch('courses/fetchItems');
};

export const selectItems = (store) => {

    const { getters } = store;
    return getters['courses/items']
}

export const selectFilteredItems = (store) => {

  const { getters } = store;
  //return getters['courses/items'];
  return getters['courses/items']
}

export const removeItem = (store, id) => {
  const { dispatch } = store;
  dispatch('courses/removeItem', id);
}

export const addItem = (store, { img_path, name, teacher, program, cost }) => {
  const { dispatch } = store;
  dispatch('courses/addItem', { img_path, name, teacher, program, cost });
}

export const updateItem = (store, { id, img_path, name, teacher, program, cost }) => {
  const { dispatch } = store;
  dispatch('courses/updateItem', { id, img_path, name, teacher, program, cost });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['courses/itemsByKey'][id] || {};
}
