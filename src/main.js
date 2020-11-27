import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入axios
import axios from 'axios'
import VueAxios from 'vue-axios'
// 注册全局组件
Vue.use(VueAxios, axios)
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
