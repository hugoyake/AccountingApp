import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import Meta from 'vue-meta';
import 'material-design-icons-iconfont/dist/material-design-icons.css'


Vue.config.productionTip = false

Vue.use(Meta)

new Vue({
  router,
  store,
  vuetify,  
  Meta,
  render: h => h(App)
}).$mount('#app')
