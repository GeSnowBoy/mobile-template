// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import vueExtend from 'vue-extend'
import router from './router'
import store from './store'

Vue.use(vueExtend, {isMixin: true, userName: 'walletUser'})

FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  components: {App},
  store,
  router,
  render: h => h(App)
})
