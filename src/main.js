import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router'
import 'bootstrap'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import VueFirestore from 'vue-firestore';

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(VueFirestore);

const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
