import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import routes from './routes/index.ts'

Vue.config.productionTip = false

Vue.use(Router)
  
const router = new Router({
    routes,
})

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')