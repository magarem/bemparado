
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '/', component: () => import('src/pages/Auth.vue') },
      { path: '/home', component: () => import('src/pages/Home.vue'), meta: {requiresAuth: true} },
      { path: 'carnew', component: () => import('src/pages/Carnew.vue'), meta: {requiresAuth: true} },
      { path: 'carout', component: () => import('src/pages/Carout.vue'), meta: {requiresAuth: true} },
      { path: 'print', component: () => import('src/pages/Print.vue'), meta: {requiresAuth: true} },
      { path: 'printimg', component: () => import('src/pages/printimg.vue'), meta: {requiresAuth: true} },
      { path: 'list', component: () => import('src/pages/List.vue'), meta: {requiresAuth: true} }
  ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
