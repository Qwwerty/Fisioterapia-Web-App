import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router'
import './registerServiceWorker'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

//Components
import principal from '../src/components/principal/principal'
import login from '../src/components/login/login'

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  { path: '/', component: login },
  { path: '/principal', component: principal }
  
]

const router = new VueRouter({ routes, mode: 'history'})

router.beforeEach((to, from, next) => {

  if(to.path === "/" && localStorage.getItem('email') !== null)
    next('/principal')
  else if(to.path === '/principal' && localStorage.getItem('email') == null)
    next('/')
  else if(to.path !== '/' && to.path !== '/principal')
    next('/')
  else
    next()

  console.log(to)
  
})

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
