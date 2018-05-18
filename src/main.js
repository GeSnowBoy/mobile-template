// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
import App from './App'
import vueExtend from 'vue-extend'
import router from './router'
import store from './store'
import {ViewBox, Tabbar, TabbarItem, XHeader} from 'vux'
// 给vue 添加常用方法
Vue.use(vueExtend, {isMixin: true, userName: 'walletUser', isDev: process.env.NODE_ENV === 'development'})
// 全局注册vux UI 控件
Vue.component('tabbar', Tabbar)
Vue.component('tabbar-item', TabbarItem)
Vue.component('view-box', ViewBox)
Vue.component('x-header', XHeader)
// 快速响应点击事件
FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app-box',
  components: {App},
  store,
  router,
  beforeCreate() {
    // 非开发环境
    if (!this.isDev) {
      // 判断是否登录
      if (this.localStorage.get('token')) {
        this.$router.push('/mining');
      } else {
        this.$router.push('/login');
      }
    }

  },
  render: h => h(App)
})
