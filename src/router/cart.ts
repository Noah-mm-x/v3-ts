const cartRoute = [
  {
    path: '/cart',
    name: 'cart',
    meta: {
      keepAlive: true
    },
    component: () => import('/@pages/Cart/index.vue'),
  }
]
export default cartRoute