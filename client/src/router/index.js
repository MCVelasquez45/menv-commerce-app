import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '../pages/LandingPage.vue';

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage,
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/', // catch-all route
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
