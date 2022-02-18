import Vue from 'vue'
import App from './App.vue'
import mapBoxGl from 'mapbox-gl'


var VueResousrce = require('vue-resource') 

Vue.use(VueResousrce)
Vue.prototype.$mapboxgl = mapBoxGl



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
