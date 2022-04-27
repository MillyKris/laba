export const fetchItems = ( store ) => {
  const { dispatch } = store;
  dispatch('teachers/fetchItems');
};

export const selectItems = ( store ) => {
  const { getters } = store;

  return getters['teachers/items']
}

export const removeItem = ( store, id ) => {
  const { dispatch } = store;
  dispatch('teachers/removeItem', id);
}

export const addItem = ( store, { teacher } ) => {
  const { dispatch } = store;
  dispatch('teachers/addItem', { teacher });
}

export const updateItem = ( store, { id, teacher }) => {
  const { dispatch } = store;
  dispatch('teachers/updateItem', { id, teacher });
}

export const selectItemById = (store, id) => {
  const { getters } = store;
  return getters['teachers/itemsByKey'][id] || {};
}
