export const strict = false

export const state = () => ({
  user: null,
  isClick_addRoomDialog: false,
  isClick_removeRoomDialog: false,
  removeTargetRoomID: "",
})

export const mutations = {
  setUser(state, payload) {
    state.user = payload
  },
  onClick_addRoomDialog(state, payload) {
    state.isClick_addRoomDialog = !state.isClick_addRoomDialog
  },
  onClick_removeRoomDialog(state, payload) {
    state.isClick_removeRoomDialog = !state.isClick_removeRoomDialog
  },
  setRemoveTargetRoomID(state, payload) {
    state.removeTargetRoomID = payload
  },
}

export const actions = {
  setUser({ commit }, payload) {
    commit('setUser', payload)
  },
  onClick_addRoomDialog({ commit }, payload) {
    commit('onClick_addRoomDialog', payload)
  },
  onClick_removeRoomDialog({ commit }, payload) {
    commit('onClick_removeRoomDialog', payload)
  },
  setRemoveTargetRoomID({ commit }, payload) {
    commit('setRemoveTargetRoomID', payload)
  }
}

export const getters = {
  isAuthenticated(state) {
    return !!state.user
  },
  isClick_addRoomDialog(state) {
    return !!state.isClick_addRoomDialog
  },
  isClick_removeRoomDialog(state) {
    return !!state.isClick_removeRoomDialog
  },
  isRemoveTargetRoomID(state) {
    return state.removeTargetRoomID
  }
}
