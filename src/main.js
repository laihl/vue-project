// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import routes from './router/routes'
import iView from 'iview'
import './css/main.css'
import 'iview/dist/styles/iview.css'
import store from './store/index'
Vue.config.productionTip = false
Vue.use(iView)
/* eslint-disable no-new */
router.afterEach((to, from) => {
  //
  store.commit('setCurrentNav', routes.getRoutesPathTitleMap(to.path))
})
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>',
  data () {
    return {
      routes
    }
  }
})
