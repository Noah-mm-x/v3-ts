const productsRoute = [
  {
    path: '/products',
    name: 'products',
    component: () => import('/@pages/Products/index.vue'),
  },
  {
    path: '/details',
    name: 'details',
    component: () => import('/@pages/Details/index.vue'),
  },
]
export default productsRoute