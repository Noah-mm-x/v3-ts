// index.ts 
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import { defineAsyncComponent } from 'vue'
import productsRoute from './products'
import userRoute from './user'
import cartRoute from './cart'
import Index from "/@pages/Index/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  ...productsRoute,
  ...cartRoute,
  ...userRoute
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

