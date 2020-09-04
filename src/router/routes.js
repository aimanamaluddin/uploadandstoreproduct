const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Todo.vue') },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/uploadproduct', component: () => import('pages/Uploadproduct.vue') },
      { path: '/Editproduct', component: () => import('pages/Editproduct.vue') },
      { path: '/Listproduct', component: () => import('pages/Listproduct.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
