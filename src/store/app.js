import routeIndex from '../router/routes'
let defaultCurrentNav = routeIndex.getRoutesPathTitleMap(routeIndex.routes[0].redirect).abbr

try {
  if (localStorage.currentNav && localStorage.currentNav !== 'undefined') {
    defaultCurrentNav = JSON.parse(localStorage.currentNav)
  }
} catch (e) {}

export default {
  state: {
    currentNav: defaultCurrentNav,
    tabList: []
  },
  mutations: {
    setCurrentNav (state, currentNav) {
      state.currentNav = currentNav
      try {
        localStorage.currentNav = JSON.stringify(currentNav)
      } catch (e) {}
      if (!isTabListContained(state.tabList, currentNav)) {
        currentNav.color = 'primary'
        state.tabList.push(currentNav)
      }
    },
    closeTabs (state, name) {
      let removeIndex = 0
      for (let index = 0; index < state.tabList.length; index++) {
        const tab = state.tabList[index]
        if (tab.url === name) {
          removeIndex = index
          break
        }
      }
      state.tabList.splice(removeIndex, 1)
    }
  }
}

function isTabListContained (tabList, currentNav) {
  let isContained = false
  for (let index = 0; index < tabList.length; index++) {
    const element = tabList[index]
    element.color = 'default'
    if (element.url === currentNav.url) {
      element.color = 'primary'
      isContained = true
    }
  }
  return isContained
}
