import Vue from "vue";

import Router from "vue-router"

Vue.use(Router);

const routes = [
  {
    path: '/',
    redirect: {
      name: 'helperCenter'
    }
  },
  {
    path: '/helper',
    name: 'helperCenter',
    component: () => import('../components/HelloWorld.vue'),
  }
]

export default routes