import Vue from 'vue';
import Vuex from 'vuex';
import { Module } from './modules';
import userModule from './modules/user';
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

const state = {};
const actions = {};
const mutations = {};
const getters = {};

const modules = {
  [Module.USER]: userModule,
}

export default new Vuex.Store({
  state,
  actions,
  mutations,
  getters,
  modules,
  plugins: [createPersistedState()],
})