import Vue from 'vue'
import App from './App'
import install  from 'cus-component-wyb'

Vue.use(install)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App)
})