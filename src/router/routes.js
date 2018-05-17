export default [
  {
    path: '/',
    component: resolve => require(['../pages/home'], resolve)
  }, {
    path: '/home',
    component: resolve => require(['@/pages/secondView'], resolve)
  }
]
