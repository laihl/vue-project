let defaultCurrentNav = ['Home']
try {
  if (localStorage.currentNav) {
    defaultCurrentNav = JSON.parse(localStorage.currentNav)
  }
} catch (e) {}

export default {
  state: {
    currentNav: defaultCurrentNav.abbr
  },
  mutations: {
    setCurrentNav (state, currentNav) {
      state.currentNav = currentNav
      try {
        localStorage.currentNav = JSON.stringify(currentNav)
      } catch (e) {}
    }
  }
}
