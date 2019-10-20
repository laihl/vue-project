import routeIndex from '../router/routes'

let defaultCurrentNav = routeIndex.getRoutesPathTitleMap(routeIndex.routes[0].redirect).abbr

try {
  if (localStorage.currentNav) {
    defaultCurrentNav = JSON.parse(localStorage.currentNav)
  }
} catch (e) {}

export default {
  state: {
    currentNav: defaultCurrentNav.abbr,
    tabList: []
  },
  mutations: {
    setCurrentNav (state, currentNav) {
      state.currentNav = currentNav
      try {
        localStorage.currentNav = JSON.stringify(currentNav)
      } catch (e) {}
      console.log(state.tabList)
      if (!isTabListContained(state.tabList, currentNav)) {
        currentNav.color = 'primary'
        state.tabList.push(currentNav)
      }
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
