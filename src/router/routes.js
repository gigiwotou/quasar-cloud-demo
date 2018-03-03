export default [
  {
    path: '/',
    component: () => import('layouts/main'),
    meta: {auth: true},
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/index'),
        meta: {title: 'Home'}
      },
      {
        path: 'posts',
        name: 'posts',
        component: () => import('pages/posts'),
        meta: {title: 'Posts'}
      }
    ]
  },
  {
    path: '/auth',
    redirect: '/auth/login',
    meta: {guest: true},
    component: () => import('layouts/auth'),
    children: [
      {
        path: 'login',
        name: 'login',
        component: () => import('pages/auth/login'),
        meta: {title: 'Login'}
      },
      {
        path: 'register',
        name: 'register',
        component: () => import('pages/auth/register'),
        meta: {title: 'Register'}
      }
    ]
  },

  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404')
  }
]
