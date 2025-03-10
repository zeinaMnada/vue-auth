import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AuthView from '../views/AuthView.vue';
import { getToken } from '@/utils/cookie';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: { authRequired: true }
  },
  {
    path: '/auth',
    name: 'Auth',
    component: AuthView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.authRequired);
  const token = getToken();

  if (requiresAuth && !token) {
    next({ name: 'Auth' });
  } else if (to.name === 'Auth' && token) {
    next({ name: 'Home' });
  } else {
    next();
  }
});

export default router;