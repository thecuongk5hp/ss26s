import { createStore } from "vuex";
const store = createStore({
  state: {
    b1: {
      id: 1,
      fullName: "Phạm Trung Hiếu",
      gender: "Nam",
      dateOfBirth: "25/07/2004",
      address: "Hà Nội",
    },
    b2: [
      {
        id: 1,
        fullName: "Phạm Trung Hiếu",
        gender: "Nam",
        dateOfBirth: "25/07/2004",
        address: "Hà Nội",
      },
      {
        id: 2,
        fullName: "Trần Thị Ly",
        gender: "Nữ",
        dateOfBirth: "23/01/2002",
        address: "HCM",
      },
    ],
    b3: [
      { id: 1, productName: "Cam sành", price: 20000, quantity: 10 },
      { id: 2, productName: "Bưởi ba roi", price: 50000, quantity: 15 },
    ],
    b4: 0,
    b5: [],
    b6: "Rikkei Academy",
    b7: false,
    b8: "vi",
  },
  mutations: {
    increment: (state) => {
      state.b4++;
    },
    decrement: (state) => {
      state.b4--;
    },
    addRandomNumber: (state, random) => {
      state.b5.push(random);
    },
    changeState: (state) => {
      state.b6 = "RikkeiSoft";
    },
    toggleDarkMode: (state) => {
      state.b7 = !state.b7;
    },
    setLanguage(state, newLanguage) {
      state.b8 = newLanguage;
    },
  },
  actions: {
    GenerateRandomNumber: ({ commit }) => {
      const random = Math.ceil(Math.random() * 100);
      commit("addRandomNumber", random);
    },
    changeLanguage({ commit }, language) {
      commit("setLanguage", language);
    },
  },
});

export default store;
