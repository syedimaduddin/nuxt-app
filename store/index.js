import firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/firestore'
import { firebaseMutations, vuexfireMutations } from 'vuexfire'

export const strict = false

export const state = () => ({
  user: null,
  isAdmin: false
})

export const mutations = {
  setUser(state, user) {
    state.user = user
  },
  setAdmin(state, admin) {
    state.isAdmin = admin
  },
  ...firebaseMutations,
  ...vuexfireMutations
}

export const actions = {
  async isAdmin({ state, commit }) {
    if (!state.user) {
      commit('setAdmin', false)
      return
    }
    const user = state.user
    const ref = user ? user.uid : ''
    try {
      const snapshot = await firebase
        .firestore()
        .collection('users')
        .doc(ref)
        .get()
      commit('setAdmin', snapshot.data().isAdmin)
    } catch {
      commit('setAdmin', false)
    }
  },
  logout: () => firebase.auth().signOut()
}
