import Vue from 'vue'
import App from './App.vue'
import print from './components/print'
Vue.use(print)
new Vue({
  el: '#app',
  render: h => h(App)
})
