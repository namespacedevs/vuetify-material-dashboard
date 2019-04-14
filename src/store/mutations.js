// https://vuex.vuejs.org/en/mutations.html

export default {
  //
    SET_TOKEN(state, value) {
        state.token = value;
    },
    SET_EMAIL(state, value) {
        state.email = value;
    },
    SET_SENHA(state, value) {
        state.senha = value;
    },
}
