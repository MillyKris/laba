import api from './api';

export default {
  namespaced: true,
  state: {
    items: [],
    itemsFilter: [],
  },
  getters: {
    items: state => state.items,
    itemsFilter:state => state.itemsFilter,
    itemsByKey: state => state.items.reduce((res, cur) => {
      res[cur['id']] = cur;
      return res;
    }, {}),

  },
  mutations: {
    setItems: (state, items) => {
      state.items = items;
    },
    setItemsFilter: (state, items) => {
      state.itemsFilter = items;
    },
    setItem: (state, item) => {
      state.items.push(item);
    },

    removeItem: (state, idRemove) => {
      state.items = state.items.filter(({ id }) => id !== idRemove)
    },
    updateItem: (state, updateItem) => {
      const index = state.items.findIndex(item => +item.id === +updateItem.id);
      state.items[index] = updateItem;
    }
  },
  actions: {
    fetchItems: async ({ commit }) => {
      const response = await api.courses();
      const items = await response.json();
      commit('setItems', items)
    },
    fetchItemsF: async ({ commit }) => {
      const response = await api.coursesFilter();
      const items = await response.json();
      commit('setItemsFilter', items)
    },
    removeItem: async ({ commit }, id) => {
      const idRemovedItem = await api.remove( id );
      commit('removeItem', idRemovedItem);

    },
    addItem: async ({ commit }, { img_path, name, teacher, program, cost }) => {
      const item = await api.add({ img_path, name, teacher, program, cost })
      commit('setItem', item)
    },
    updateItem: async ({ commit }, { id, img_path, name, teacher, program, cost }) => {
      const item = await api.update({ id, img_path, name, teacher, program, cost });
      commit('updateItem', item);
    },
  },
}
