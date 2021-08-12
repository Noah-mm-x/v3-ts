// index.ts 
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
// import { defineAsyncComponent } from 'vue'
import Index from "/@pages/Index/index.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/products',
    name: 'products',
    meta: {
      keepAlive: true
    },
    component: () => import('/@pages/Products/index.vue'),
  },
  {
    path: '/shoppingCart',
    name: 'shoppingCart',
    component: () => import('/@pages/ShoppingCart/index.vue'),
  },
  {
    path: '/test',
    name: 'Test',
    component: () => import('/@pages/Test/index.vue'),
  },
  {
    path: '/user',
    name: 'User',
    component: () => import('/@pages/User/index.vue'),
  },
  {
    path: '/todo',
    name: 'Todo',
    component: () => import('/@pages/Todo/index.vue'),
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

