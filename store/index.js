export const strict = false

export const state = () => ({
  user: null,
  isClick_addRoomDialog: false,
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  onClick_addRoomDialog(state, payload) {
    state.isClick_addRoomDialog = !state.isClick_addRoomDialog
  }
}

export const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  },
  onClick_addRoomDialog({ commit }, payload) {
    commit('onClick_addRoomDialog', payload)
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
  isClick_addRoomDialog(state) {
    return !!state.isClick_addRoomDialog
  }
}
