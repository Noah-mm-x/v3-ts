// index.ts 
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import { defineAsyncComponent } from 'vue'
import Home from "/@pages/Products/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'product',
    component: Home,
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: () => import('/@pages/ShoppingCart/index.vue'),
  },
  // {
  //   path: '/shoppingCart',
  //   name: 'shoppingCart',
  //   component: defineAsyncComponent(() => new Promise((resolve, reject) => {
  //     // ...doSomething
  //     resolve({
  //       // 异步组件选项
  //       // ...
  //     })
  //   })),
  // }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

