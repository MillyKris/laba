import { createStore } from 'vuex'
import courses from './courses';
import teachers from './teachers';
export default createStore({
  modules: {
    courses,
    teachers,
  },
  state: {},
  mutations: {},
  actions: {},
})
