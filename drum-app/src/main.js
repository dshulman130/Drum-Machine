import Vue from 'vue'
import PortalVue from 'portal-vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(PortalVue)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

var view = new Vue({
  render: h => h(App),

  data: {
    checked: false
  },
  template: '<div>{{ checked }}</div'
}).$mount('#app');

view.checked = false
