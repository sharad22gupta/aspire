import Vue from "vue";
import { uid } from "quasar";

const state = {
  cards_data: {
    ID1: {
      name: "Sharad",
      number: "1234343434322025",
      date: "12/22",
      cvv: "123",
      freeze: false,
    },
    ID2: {
      name: "Thai",
      number: "1234343434322224",
      date: "6/25",
      cvv: "123",
      freeze: false,
    },
  },
  active_card_name: "ID1",
};
const mutations = {
 updateActiveCard(state, payload) {
    state.active_card_name = payload.slide;
  },
  changeFreezeStatus(state, payload) {
    state.cards_data[payload.card].freeze =
      !state.cards_data[payload.card].freeze;
  },
  deleteCard(state, payload) {
    delete state.cards_data[payload];
    let remainingKeys = Object.keys(state.cards_data);
    state.active_card_name = remainingKeys[0];
        console.log(state.active_card_name);

  },
  addCard(state, payload) {
    state.cards_data[payload.id] = payload.card;
    console.log(state.cards_data)
  },
};
const actions = {
  updateActiveCard({ commit }, payload) {
    commit("updateActiveCard", payload);
  },
  changeFreezeStatus({ commit }, payload) {
    commit("changeFreezeStatus", payload);
  },
  deleteCard({ commit }, payload) {
    commit("deleteCard", payload);
  },
  addCard({ commit }, name) {
    let payload = {
      id: uid(),
      card: {
        name: name.name,
        number: Math.floor(1000000000000000 + Math.random() * 9000000000000000),
        date:
          Math.floor(Math.random() * 10 + 1) +
          "/" +
          Math.floor(Math.random() * 10 + 22),
        cvv: "123",
        freeze: false,
      },
    };
    commit("addCard", payload);
  },
};
const getters = {
  cards_data: (state) => {
    return state.cards_data;
  },
  active_card_name: (state) => {
    return state.active_card_name;
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
