import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: null
  },
  {
    path: '/biography',
    name: 'Biografie',
    component: () => import(/* webpackChunkName: "about" */ '../views/Biography.vue')
  },
  {
    path: '/projects',
    name: 'Projekte',
    component: () => import(/* webpackChunkName: "about" */ '../views/Projects.vue')
  },
  {
    path: '/imprint',
    name: 'Impressung',
    component: () => import(/* webpackChunkName: "about" */ '../views/Imprint.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router
