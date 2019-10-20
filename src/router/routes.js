import Vue from 'vue'
import Router from 'vue-router'
import MainView from '@/view/MainView'
Vue.use(Router)

let routes = {
  routes: [
    {
      path: '/',
      redirect: '/system/userList'
    },
    {
      path: '/system',
      name: 'system',
      title: '系统配置',
      redirect: 'userList',
      component: MainView,
      iconType: 'md-settings',
      children: [
        {path: '/system/userList', title: '用户列表', iconType: 'ios-people', name: 'userList', component: () => import('@/view/system/userList')},
        {path: '/system/roleList', title: '角色列表', iconType: 'ios-briefcase', name: 'roleList', component: () => import('@/view/system/RoleList')},
        {path: '/system/authList', title: '权限列表', iconType: 'ios-ribbon', name: 'authList', component: () => import('@/view/system/AuthList')},
        {path: '/system/dataLib', title: '数据字典', iconType: 'ios-book', name: 'dataLib', component: () => import('@/view/system/DataLib')}
      ]
    },
    {
      path: '/Item1',
      name: 'Item1',
      title: 'Item1',
      component: MainView,
      children: [
        {path: '/Item1/Item1', title: 'Item1', name: 'Item1', component: () => import('@/view/Item1')}
      ]
    }
  ],
  getRoutesPathTitleMap (path) {
    let pathMap = {}
    this.routes.forEach(function (route) {
      if (route.children != null) {
        route.children.forEach(function (child) {
          pathMap[child.path] = {
            titleList: [ route.title, child.title ],
            nameList: [ route.name, child.name ],
            url: child.path,
            iconType: child.iconType
          }
        })
      }
    })
    return pathMap[path]
  }
}

export default routes
