const userRoute = [
  {
    path: '/test',
    name: 'test',
    component: () => import('/@pages/Test/index.vue'),
  },
  {
    path: '/testHtml',
    name: 'testHtml',
    component: () => import('/@pages/TestHtml/index.vue'),
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('/@pages/User/index.vue'),
  },
  {
    path: '/todo',
    name: 'todo',
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
]
export default userRoute